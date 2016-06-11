class DropGamesAndGameItems < ActiveRecord::Migration
  def change
    drop_table :games
    drop_table :game_items
  end
end
