# frozen_string_literal: true

module Types
  class TagType < Types::BaseObject
    description 'Object to tag notes'

    field :id, ID, null: false
    field :name, String, null: true
    field :notes, Types::NoteType.connection_type,
          null: false, description: 'Notes that are tagged by this tag'
  end
end
