# frozen_string_literal: true

module Types
  class TagType < Types::BaseObject
    description 'Object to tag notes'
    field :name, String, null: true
    field :notes, [Types::NoteType], null: false
  end
end
