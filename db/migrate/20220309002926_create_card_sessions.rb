class CreateCardSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :card_sessions do |t|
      t.references :user, null: false, foreign_key: true
      t.references :card, null: false, foreign_key: true

      t.timestamps
    end
  end
end
