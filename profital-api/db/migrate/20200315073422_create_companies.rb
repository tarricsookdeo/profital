class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :ticker
      t.string :name
      t.string :industry
      t.belongs_to :position, foreign_key: true

      t.timestamps
    end
  end
end
