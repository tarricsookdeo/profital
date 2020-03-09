class CreateTrades < ActiveRecord::Migration[5.2]
  def change
    create_table :trades do |t|
      t.integer :shares
      t.decimal :avg_price_enter, precision: 6, scale: 3
      t.decimal :avg_price_exit, precision: 6, scale: 3, null: true
      t.date :date_enter
      t.date :date_exit, null: true
      t.boolean :is_active, default: true
      t.integer :company_id, foreign_key: true

      t.timestamps
    end
  end
end
