class Position < ApplicationRecord
  belongs_to :company
  has_many :trades
end
