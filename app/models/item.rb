class Item < ActiveRecord::Base
  has_many :storycards, through: :storycard_items
  has_many :storycard_items

  has_many :games, through: :game_items
  has_many :game_items
end
