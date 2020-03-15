class PositionSerializer < ActiveModel::Serializer
  attributes :id, :shares, :avg_price
  belongs_to :company
  has_many :trades
end
