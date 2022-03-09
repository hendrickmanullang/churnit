class AddIncomeToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :income, :integer
  end
end
