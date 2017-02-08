# frozen_string_literal: true
class DicomDecorator < Draper::Decorator
  delegate_all

  delegate :num_frames, to: :parsed_file

  def parsed_file
    @parsed_file ||= DICOM::DObject.read(file.path)
  end

  def images_component_data
    images.map do |image|
      {
        id: image.id,
        originalPath: image.file.url,
        thumb50: image.file.url(:thumb_50),
        width: image.width,
        height: image.height
      }
    end
  end
end
