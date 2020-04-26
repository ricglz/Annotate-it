# frozen_string_literal: true

class Note < ApplicationRecord
  acts_as_paranoid

  belongs_to :folder, dependent: :destroy, inverse_of: :notes, optional: true
  belongs_to :user, inverse_of: :notes
  has_many :notes_tags, dependent: :destroy, inverse_of: :note
  has_many :tags, through: :notes_tags, dependent: :destroy, inverse_of: :notes
end
