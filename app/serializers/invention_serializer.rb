class InventionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :permalink
  has_one :user
  has_many :bits, :tag_list
end
