class User < ActiveRecord::Base
  has_many :invention, through: :invention
end
