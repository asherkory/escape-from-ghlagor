class StorycardSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
  has_many :items, serializer: StoryItemSerializer
  has_many :removable_items, serializer: StoryRemovableItemSerializer
  has_many :children, serializer: ChildrenSerializer
end