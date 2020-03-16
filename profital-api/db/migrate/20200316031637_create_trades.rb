class CreateTrades < ActiveRecord::Migration[6.0]
  def change
    create_table :trades do |t|
      t.integer :shares
      t.string :side
      t.decimal :avg_price
      t.date :date
      t.integer :position_id

      t.timestamps
    end
  end
end
