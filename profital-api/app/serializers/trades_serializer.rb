class TradesSerializer < ActiveModel::Serializer
  attributes :id, :shares, :avg_price_enter, :avg_price_exit, :date_enter, :date_exit, :is_active
  belongs_to :company
end
