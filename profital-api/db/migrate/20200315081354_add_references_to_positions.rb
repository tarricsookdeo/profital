class AddReferencesToPositions < ActiveRecord::Migration[5.2]
  def change
    add_reference :positions, :trades, foreign_key: true
  end
end
