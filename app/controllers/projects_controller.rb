# frozen_string_literal: true
# User projects controller
class ProjectsController < ApplicationController
  layout 'object', except: %i(index new create)
  helper_method :object

  before_action :authenticate_user!

  def index
    @projects = current_user.projects.includes(dicom: :prew_image).decorate
  end

  def show
    load_project
    load_tags
    respond_to do |format|
      format.html
      format.dcm do
        send_file(@project.dicom.file.path, filename: "#{@project.name}.dcm")
      end
    end
  end

  def new
    @project = current_user.projects.new
  end

  def edit
    load_project
  end

  def create
    @project = current_user.projects.new(project_params)

    if @project.save
      flash[:notice] = 'Project successfully created!'
      redirect_to @project
    else
      render :new
    end
  end

  def update
    load_project

    if @project.update_attributes(project_params)
      redirect_to @project
    else
      render :edit
    end
  end

  def destroy
    load_project

    if @project.destroy
      flash[:notice] = 'Project successfully deleted.'
      redirect_to projects_url
    else
      flash[:alert] = 'Can\'t destroy project.'
    end
  end

  private

  def object
    @project
  end

  def load_project
    @project = current_user.projects.find(params[:id]).decorate
  end

  def load_tags
    @project.dicom ? @tags = JSON.parse(@project.dicom.tags) : ''
  end

  def project_params
    params.require(:project)
          .permit(
            :name, :accessibility, :description,
            dicom_attributes: [:file, :pixel_spacing, :slice_thickness, :tags]
          )
  end
end
