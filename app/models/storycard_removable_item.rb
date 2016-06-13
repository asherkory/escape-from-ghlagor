class StorycardRemovableItem < ActiveRecord::Base
  belongs_to :removable_storycard, class_name: "Storycard"
  belongs_to :removable_item, class_name: "Item"
end