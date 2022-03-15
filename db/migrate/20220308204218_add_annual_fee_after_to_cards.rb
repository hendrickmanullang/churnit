class AddAnnualFeeAfterToCards < ActiveRecord::Migration[6.1]
  def change
    add_column :cards, :annual_fee_after, :decimal
  end
end
