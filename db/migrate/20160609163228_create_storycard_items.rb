class CreateStorycardItems < ActiveRecord::Migration
  def change
    create_table :storycard_items do |t|
      t.integer :storycard_id
      t.integer :item_id
    end
  end
end
