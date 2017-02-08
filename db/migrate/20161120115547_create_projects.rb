# frozen_string_literal: true
class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.belongs_to :user, null: false
      t.string :name, null: false
      t.string :accessibility, null: false
      t.text :description

      t.timestamps
    end
  end
end
