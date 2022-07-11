# frozen_string_literal: true

class Note < ApplicationRecord

  default_scope { without_deleted.order(updated_at: :desc) }

  belongs_to :folder, inverse_of: :notes, optional: true
  belongs_to :user, inverse_of: :notes
  has_many :notes_tags, dependent: :destroy, inverse_of: :note
  has_many :tags, through: :notes_tags, dependent: :destroy, inverse_of: :notes

  def title
    if content.length < 50
      content
    else
      "#{content[0..49]}..."
    end
  end
end
