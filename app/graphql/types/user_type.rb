# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    description 'A user'

    field :id, ID, null: false
    field :name, String, null: true
    field :email, String, null: true

    field :notes, Types::NoteType.connection_type,
          null: false, description: 'Notes made by the user'
    field :folders, Types::FolderType.connection_type,
          null: false, description: 'Folders made by the user'
    field :tags, Types::TagType.connection_type,
          null: false, description: 'Tags made by the user'
  end
end
