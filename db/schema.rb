# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161216205240) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dicoms", force: :cascade do |t|
    t.integer  "project_id",      null: false
    t.string   "file",            null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.float    "pixel_spacing"
    t.float    "slice_thickness"
    t.json     "tags"
    t.index ["project_id"], name: "index_dicoms_on_project_id", using: :btree
  end

  create_table "images", force: :cascade do |t|
    t.integer  "dicom_id",   null: false
    t.string   "file",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "width",      null: false
    t.integer  "height",     null: false
    t.index ["dicom_id"], name: "index_images_on_dicom_id", using: :btree
  end

  create_table "projects", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.string   "name",          null: false
    t.string   "accessibility", null: false
    t.text     "description"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["user_id"], name: "index_projects_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
