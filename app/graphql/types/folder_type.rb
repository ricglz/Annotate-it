# frozen_string_literal: true

module Types
  class FolderType < Types::BaseObject
    description 'A folder containing notes'

    field :name, String, null: true

    field :notes, [Types::NoteType], null: false
  end
end
