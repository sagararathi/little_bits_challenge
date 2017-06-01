class Invention < ActiveRecord::Base
  acts_as_taggable
  acts_as_taggable_on :other_bits

  acts_as_permalink from: :title, to: :permalink,
                    max_length: 40, allow_update:  false
  acts_as_paranoid

  belongs_to :user
  has_and_belongs_to_many :bits

  accepts_nested_attributes_for :user, :bits

  validates :title, :description, presence: true

  def to_param
    permalink
  end

end
