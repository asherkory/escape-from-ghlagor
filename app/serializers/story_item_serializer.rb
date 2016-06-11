class StoryItemSerializer < ActiveModel::Serializer
  attributes :name, :inventory_category, :description, :id
end