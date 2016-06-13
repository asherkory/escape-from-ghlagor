class Item < ActiveRecord::Base
  has_many :storycards, through: :storycard_items
  has_many :storycard_items

  has_many :removable_storycards, through: :storycard_removable_items, class_name: "Storycard"
  has_many :storycard_removable_items, foreign_key: :removable_item_id
end
