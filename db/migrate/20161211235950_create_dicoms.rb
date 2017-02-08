class CreateDicoms < ActiveRecord::Migration[5.0]
  def change
    create_table :dicoms do |t|
      t.belongs_to :project, null: false
      t.string :file, null: false

      t.timestamps
    end
  end
end
