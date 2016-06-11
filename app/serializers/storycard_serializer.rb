class StorycardSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
  has_many :items, serializer: StoryItemSerializer
  has_many :children, serializer: ChildrenSerializer
end