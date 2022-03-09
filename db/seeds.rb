# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

CSV.read(Rails.root.join('lib', 'seeds', 'credit_card_info.csv'), headers: true, encoding: 'ISO-8859-1').each do |row|
  t = Card.create(row.to_h)
  puts "#{t.card_name} is saved"
end

puts "There are now #{Card.count} cards in the database table"
