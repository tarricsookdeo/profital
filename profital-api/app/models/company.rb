class Company < ApplicationRecord
    validates :ticker, presence: true
    validates :ticker, uniqueness: true
end
