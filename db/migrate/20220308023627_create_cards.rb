class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :card_name
      t.string :card_image_url
      t.string :card_type
      t.string :reward_category
      t.integer :reward_rate
      t.integer :interest_free_period
      t.integer :annual_fee
      t.integer :bonus_point_spend
      t.integer :bonus_point_time
      t.integer :bonus_point_reward
      t.integer :interest_rate
      t.integer :late_payment_fee
      t.integer :foreign_transaction_fee
      t.integer :minimum_income
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
