# frozen_string_literal: true

module Types
  class NoteType < Types::BaseObject
    description 'A note'

    field :title, String, null: true
    field :content, String, null: true
    field :id, ID, null: false
    field :folder, Types::FolderType, null: true
    field :tags, Types::TagType.connection_type,
          null: false, description: 'Tags that are representing this note'
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def title
      object.content[0..50]
    end
  end
end
