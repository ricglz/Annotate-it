# frozen_string_literal: true

class Tag < ApplicationRecord
  belongs_to :user, inverse_of: :tags
  has_many :notes_tags, dependent: :delete, inverse_of: :tags
  has_many :notes, through: :notes_tags, dependent: :delete, inverse_of: :tags
end
