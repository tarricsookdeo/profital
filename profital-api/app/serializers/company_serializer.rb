class CompanySerializer < ActiveModel::Serializer
  attributes :id, :ticker
  has_one :position
  has_many :trades, :through => :position
end
