# frozen_string_literal: true
# Project attributes controller
class ProjectAttributesController < ApplicationController
  layout 'object'

  before_action :authenticate_user!

  helper_method :object

  def index
    load_project
    load_tags
  end

  private

  def load_project
    @project = current_user.projects.find(params[:project_id]).decorate
  end

  def load_tags
    @project.dicom ? @tags = JSON.parse(@project.dicom.tags) : ''
  end

  def object
    @project
  end
end
