class PositionSerializer < ActiveModel::Serializer
  attributes :id, :company, :trades, :shares, :avg_price, :total_cost
  belongs_to :company
  has_many :trades
end
