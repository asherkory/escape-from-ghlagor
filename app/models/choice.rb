class Choice < ActiveRecord::Base
  belongs_to :parent, foreign_key: "parent_id", class_name: "Storycard"
  belongs_to :child, foreign_key: "child_id", class_name: "Storycard"
end