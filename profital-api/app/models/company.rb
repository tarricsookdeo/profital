class Company < ApplicationRecord
  belongs_to :position
  has_many :trades, :through => :position
end
