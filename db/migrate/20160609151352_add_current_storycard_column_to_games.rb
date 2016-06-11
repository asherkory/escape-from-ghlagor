class AddCurrentStorycardColumnToGames < ActiveRecord::Migration
  def change
    add_column :games, :current_storycard, :integer
  end
end
