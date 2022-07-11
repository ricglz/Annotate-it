# frozen_string_literal: true

class NotesTag < ApplicationRecord
  belongs_to :note, inverse_of: :notes_tags
  belongs_to :tag, inverse_of: :notes_tags
end
