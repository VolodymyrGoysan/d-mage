# frozen_string_literal: true
class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.belongs_to :dicom, null: false
      t.string :file, null: false

      t.timestamps
    end
  end
end
