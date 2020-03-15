class CreateTrades < ActiveRecord::Migration[5.2]
  def change
    create_table :trades do |t|
      t.belongs_to :position, foreign_key: true
      t.integer :shares
      t.decimal :avg_price, :precision => 8, :scale => 2
      t.date :date

      t.timestamps
    end
  end
end
