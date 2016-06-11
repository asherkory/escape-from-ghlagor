class ChangeItemTypeToInventoryCategory < ActiveRecord::Migration
  def change
    remove_column :items, :type
    add_column :items, :inventory_category, :string
  end
end
