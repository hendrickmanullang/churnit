class FixAnnualFeeColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :cards, :annual_fee, :annual_fee_init
  end
end
