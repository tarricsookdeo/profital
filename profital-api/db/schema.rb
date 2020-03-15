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

ActiveRecord::Schema.define(version: 2020_03_15_081354) do

  create_table "companies", force: :cascade do |t|
    t.string "ticker"
    t.integer "position_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "positions", force: :cascade do |t|
    t.integer "company_id"
    t.integer "shares"
    t.decimal "avg_price", precision: 8, scale: 2
    t.decimal "total_cost", precision: 8, scale: 2
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "trades_id"
    t.index ["company_id"], name: "index_positions_on_company_id"
    t.index ["trades_id"], name: "index_positions_on_trades_id"
  end

  create_table "trades", force: :cascade do |t|
    t.integer "position_id"
    t.integer "shares"
    t.decimal "avg_price", precision: 8, scale: 2
    t.date "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["position_id"], name: "index_trades_on_position_id"
  end

end
