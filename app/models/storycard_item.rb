class StorycardItem < ActiveRecord::Base
  belongs_to :storycard
  belongs_to :item
end