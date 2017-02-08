# frozen_string_literal: true
module HasProject
  extend ActiveSupport::Concern

  included do
    layout 'object'

    before_action :authenticate_user!
    before_action :load_project
    helper_method :object
  end

  protected

  def object
    @project
  end

  def load_project
    @project = current_user.projects.find(params[:project_id]).decorate
  end
end
