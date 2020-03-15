class TradeSerializer < ActiveModel::Serializer
  attributes :id, :shares, :avg_price, :date
  belongs_to :position
  has_one :company, :through => :position
end
