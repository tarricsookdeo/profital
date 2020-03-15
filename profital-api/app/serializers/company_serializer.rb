class CompanySerializer < ActiveModel::Serializer
  attributes :id, :ticker, :name, :industry
  has_one :position
  has_many :trades, :through => :position
end
