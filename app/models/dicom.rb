# frozen_string_literal: true
# Dicom class
class Dicom < ApplicationRecord
  belongs_to :project, optional: true

  has_many :images, dependent: :destroy

  has_one :prew_image,
          -> { limit(1) },
          class_name: 'Image'

  before_save :add_attributes
  after_save :create_images

  mount_uploader :file, DicomUploader

  private

  def create_images
    service = CreateImagesForDicomService.new(self)

    service.perform!
  end

  def add_attributes
    self.pixel_spacing = pixel_spacing_value(DICOM::DObject.read(file.path))
    self.slice_thickness = slice_thickness_value(DICOM::DObject.read(file.path))
    self.tags = tags_value(DICOM::DObject.read(file.path))
  end

  def pixel_spacing_value(dobject)
    if dobject.num_frames > 1
      dobject.to_hash.dig('Pre-frame Functional Groups Sequence', 'Item 0', \
                          'Pixel Measures Sequence', 'Item 0', 'Pixel Spacing') \
      || dobject.to_hash.dig('Shared Functional Groups Sequence', \
                             'Item 0', 'Pixel Measures Sequence', \
                             'Item 0', 'Pixel Spacing')
    else
      dobject.to_hash['Pixel Spacing'] || 1
    end
  end

  def slice_thickness_value(dobject)
    if dobject.num_frames > 1
      dobject.to_hash.dig('Pre-frame Functional Groups Sequence', 'Item 0', \
                          'Pixel Measures Sequence', 'Item 0', 'Slice Thickness') \
      || dobject.to_hash.dig('Shared Functional Groups Sequence', \
                             'Item 0', 'Pixel Measures Sequence', \
                             'Item 0', 'Slice Thickness')
    else
      dobject.to_hash['Slice Thickness'] || 1
    end
  end

  def tags_value(dobject)
    dobject.to_hash.to_json
  end
end
