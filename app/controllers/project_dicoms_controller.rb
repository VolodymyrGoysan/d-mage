# frozen_string_literal: true
class ProjectDicomsController < ApplicationController
  include HasProject

  layout 'dicom_editor'

  def edit
    @dicom = @project.dicom.decorate
  end
end
