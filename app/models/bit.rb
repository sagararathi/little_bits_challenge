class Bit < ActiveRecord::Base
  has_and_belongs_to_many :inventions

  validates :name, presence: true, uniqueness: true
end
