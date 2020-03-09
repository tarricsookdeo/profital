class Company < ApplicationRecord
    has_many :trades, dependent: :destroy
end
