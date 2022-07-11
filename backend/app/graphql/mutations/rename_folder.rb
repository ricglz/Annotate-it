# frozen_string_literal: true

module Mutations
  class RenameFolder < BaseMutation
    field :folder, Types::FolderType, null: false

    argument :name, String, required: true
    argument :folder_id, ID, required: true

    def resolve(arguments)
      raise GraphQL::ExecutionError, not_found(viewer) unless viewer

      folder = viewer.folders.find(arguments[:folder_id])
      raise GraphQL::ExecutionError, object_errors(folder) unless folder.save

      folder.update(name: arguments[:name])
      { folder: folder }
    end
  end
end
