class PositionSerializer < ActiveModel::Serializer
  attributes :id, :company, :trades, :shares, :avg_price, :total_cost
end
