# frozen_string_literal: true

module Types
  class FolderType < Types::BaseObject
    description 'A folder containing notes'

    field :id, ID, null: false
    field :name, String, null: true

    field :notes, Types::NoteType.connection_type,
          null: false, description: 'Notes inside the folder'
  end
end
