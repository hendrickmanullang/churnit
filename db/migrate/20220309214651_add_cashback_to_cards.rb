class AddCashbackToCards < ActiveRecord::Migration[6.1]
  def change
    add_column :cards, :cashback_reward, :decimal
    add_column :cards, :cashback_spend, :decimal
    add_column :cards, :cashback_time, :decimal
  end
end
