class Company < ApplicationRecord
  has_one :position
  has_many :trades, :through => :position
end
