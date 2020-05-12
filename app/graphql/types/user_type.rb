# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    description 'A user'

    field :id, ID, null: false
    field :name, String, null: true
    field :email, String, null: true

    field :note, Types::NoteType,
          null: true, description: 'An Specific note' do
      argument :id, ID, required: true
    end
    field :notes, Types::NoteType.connection_type,
          null: false, description: 'Notes made by the user'

    field :folder, Types::FolderType,
          null: true, description: 'An Specific folder' do
      argument :id, ID, required: true
    end
    field :folders, Types::FolderType.connection_type,
          null: false, description: 'Folders made by the user'

    field :tags, Types::TagType.connection_type,
          null: false, description: 'Tags made by the user'

    def note(input)
      object.notes.find(input[:id])
    end

    def folder(input)
      object.folders.find(input[:id])
    end
  end
end
