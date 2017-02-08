# frozen_string_literal: true
class ProjectDecorator < Draper::Decorator
  delegate_all

  EMPTY_PREW_IMAGE_PATH = 'project_default_200_200.png'.freeze

  def prew_image_url
    return EMPTY_PREW_IMAGE_PATH if dicom.blank? || dicom.image_ids.blank?
    dicom.prew_image.file.url(:thumb_200)
  end
end
