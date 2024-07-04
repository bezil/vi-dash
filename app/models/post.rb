class Post < ApplicationRecord
  belongs_to :user
  has_rich_text :description
  has_one_attached :cover
  has_one_attached :audio
end
