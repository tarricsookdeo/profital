class Trade < ApplicationRecord
  belongs_to :position
  has_one :company, :through => :position
end
