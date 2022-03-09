class AddSpendToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :spend, :integer
  end
end
