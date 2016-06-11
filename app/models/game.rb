class Game < ActiveRecord::Base
  has_many :items, through: :game_items
  has_many :game_items
end
