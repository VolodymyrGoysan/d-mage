# frozen_string_literal: true
class Image < ApplicationRecord
  belongs_to :dicom

  mount_uploader :file, ImageUploader

  validates :file, presence: true
end
