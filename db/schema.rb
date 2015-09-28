# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150928085228) do

  create_table "activities", force: :cascade do |t|
    t.string   "title"
    t.string   "type"
    t.string   "institution"
    t.string   "description"
    t.string   "github"
    t.string   "twitter"
    t.string   "url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "email"
    t.string   "subject"
    t.text     "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "experiences", force: :cascade do |t|
    t.string   "position"
    t.string   "company"
    t.string   "startdate"
    t.string   "enddate"
    t.string   "location"
    t.text     "duties"
    t.string   "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "formations", force: :cascade do |t|
    t.string   "name"
    t.string   "institution"
    t.string   "startdate"
    t.string   "enddate"
    t.text     "skills"
    t.string   "certificate"
    t.string   "url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "project_technologies", force: :cascade do |t|
    t.integer "project_id"
    t.integer "technology_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title"
    t.string   "thumb"
    t.text     "description"
    t.string   "github"
    t.string   "twitter"
    t.string   "url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "technologies", force: :cascade do |t|
    t.string   "name"
    t.string   "logo"
    t.text     "description"
    t.string   "link"
    t.string   "doc"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "role"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "password_digest"
  end

end
