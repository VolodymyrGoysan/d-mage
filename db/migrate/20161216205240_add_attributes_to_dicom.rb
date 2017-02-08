# frozen_string_literal: true
class AddAttributesToDicom < ActiveRecord::Migration[5.0]
  def change
    add_column :dicoms, :pixel_spacing, :float
    add_column :dicoms, :slice_thickness, :float
    add_column :dicoms, :tags, :json
  end
end
