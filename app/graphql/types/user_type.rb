# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    description 'A user'

    field :id, ID, null: false
    field :first_name, String, null: true
    field :last_name, String, null: true
    field :email, String, null: true

    field :notes, [Types::NoteType],
          null: false, description: 'Notes made by the user'
    field :folders, [Types::FolderType],
          null: false, description: 'Folders made by the user'
    field :Tags, [Types::TagType],
          null: false, description: 'Tags made by the user'
  end
end
