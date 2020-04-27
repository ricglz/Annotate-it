# frozen_string_literal: true

module Types
  class NoteType < Types::BaseObject
    description 'A note'

    field :content, String, null: true
    field :folder, Types::FolderType, null: true
    field :tags, [Types::TagType], null: false
  end
end
