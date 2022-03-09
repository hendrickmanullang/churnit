class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :card_name
      t.string :card_image_url
      t.string :card_type
      t.string :reward_category
      t.decimal :reward_rate
      t.decimal :interest_free_period
      t.decimal :annual_fee
      t.decimal :bonus_point_spend
      t.decimal :bonus_point_time
      t.decimal :bonus_point_reward
      t.decimal :interest_rate
      t.decimal :late_payment_fee
      t.decimal :foreign_transaction_fee
      t.decimal :minimum_income

      t.timestamps
    end
  end
end
