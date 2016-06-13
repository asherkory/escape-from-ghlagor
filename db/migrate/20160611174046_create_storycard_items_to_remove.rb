class CreateStorycardItemsToRemove < ActiveRecord::Migration
  def change
    create_table :storycard_removable_items do |t|
      t.integer :removable_storycard_id
      t.integer :removable_item_id
    end
  end
end
