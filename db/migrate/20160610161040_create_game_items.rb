class CreateGameItems < ActiveRecord::Migration
  def change
    create_table :game_items do |t|
      t.integer :item_id
      t.integer :game_id
    end
  end
end
