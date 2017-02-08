# frozen_string_literal: true
class ProjectImagesController < ApplicationController
  include HasProject

  def index
    @images = @project.dicom.images.map do |img|
      {
        id: img.id,
        width: img.width,
        height: img.height,
        url_400: img.file.url(:thumb_400),
        url_50: img.file.url(:thumb_50),
        url: img.file.url
      }
    end
  end
end
