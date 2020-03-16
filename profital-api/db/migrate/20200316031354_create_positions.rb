class CreatePositions < ActiveRecord::Migration[6.0]
  def change
    create_table :positions do |t|
      t.string :ticker
      t.integer :shares
      t.decimal :avg_price

      t.timestamps
    end
  end
end
