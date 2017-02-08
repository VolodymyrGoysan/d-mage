# frozen_string_literal: true
class AddWidthAndHeightToImages < ActiveRecord::Migration[5.0]
  def change
    add_column :images, :width, :integer, null: false
    add_column :images, :height, :integer, null: false
  end
end
