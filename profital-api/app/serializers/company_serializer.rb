class CompanySerializer < ActiveModel::Serializer
  attributes :id, :ticker
  has_many :trades
end
