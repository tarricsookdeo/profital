class Trade < ApplicationRecord
    scope :active, -> { where("is_active == true" )}
    
    belongs_to :company
end