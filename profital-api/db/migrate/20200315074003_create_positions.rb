class CreatePositions < ActiveRecord::Migration[5.2]
  def change
    create_table :positions do |t|
      t.belongs_to :company, foreign_key: true
      t.integer :shares
      t.decimal :avg_price, :precision => 8, :scale => 2
      t.decimal :total_cost, :precision => 8, :scale => 2

      t.timestamps
    end
  end
end
