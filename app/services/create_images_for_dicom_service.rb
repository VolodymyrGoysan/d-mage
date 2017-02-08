# frozen_string_literal: true
class CreateImagesForDicomService
  attr_reader :dicom

  def initialize(dicom)
    @dicom = dicom
  end

  def perform!
    d_obj.images.each_with_index do |image, i|
      image_path = store_file(image, i)
      Image.create(
        dicom_id: dicom.id,
        file: File.open(image_path),
        width: image.columns,
        height: image.rows
      )
    end

    tmp_folder.rmtree
  end

  private

  def d_obj
    @d_obj ||= DICOM::DObject.read(dicom.file.path)
  end

  def tmp_folder
    @tmp_folder ||= begin
      path = Pathname.new("#{Rails.root}/tmp/dicom_images/#{dicom.id}")
      path.mkpath

      path
    end
  end

  def store_file(image, i)
    image_path = tmp_folder + "img_#{i}.jpg"

    image.normalize_channel(Magick::RedChannel,
                            Magick::GreenChannel,
                            Magick::BlueChannel).write(image_path) do
      self.quality = 100
    end

    image_path
  end
end
