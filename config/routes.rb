# frozen_string_literal: true
Rails.application.routes.draw do
  resources :projects do
    resources :project_images, only: :index, path: :images
    resources :project_dicoms, only: :edit, path: :dicom
    resources :project_attributes, only: :index, path: :attributes
  end

  root to: 'static_pages#index'

  devise_for :users, controllers: { sessions: 'users/sessions', registrations:
    'users/registrations', passwords: 'users/passwords' }
end
