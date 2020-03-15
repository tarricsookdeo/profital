# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create Companies
companies = Company.create(
    [
        { ticker: 'AAPL', position_id: 1 },
    ]
)

# Create Positions
positions = Position.create(
    [
        { company_id: 1, shares: 20, avg_price: 205.63, total_cost: 4112.60 }
    ]
)

# Create Trades
trades = Trade.create(
    [
        { position_id: 1, shares: 10, avg_price: 200.50, date: Date.parse('01/01/2020') },
        { position_id: 1, shares: 10, avg_price: 210.75, date: Date.parse('01/02/2020') }
    ]
)