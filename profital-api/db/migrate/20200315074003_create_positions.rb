class CreatePositions < ActiveRecord::Migration[5.2]
  def change
    create_table :positions do |t|
      t.belongs_to :company_id
      t.has_many :trades
      t.integer :shares
      t.decimal :avg_price
      t.decimal :total_cost

      t.timestamps
    end
  end
end
