# frozen_string_literal: true

module Mutations
  class RenameFolder < BaseMutation
    field :folder, Types::FolderType, null: false

    argument :name, String, required: true
    argument :folder_id, ID, required: true

    def resolve(arguments)
      raise GraphQL::ExecutionError, "This viewer doesn't exist" unless viewer

      folder = viewer.folders.find(arguments[:folder_id])
      unless folder.save
        raise GraphQL::ExecutionError,
              "This folder doesn't belong to the viewer"
      end

      folder.update(name: arguments[:name])
      { folder: folder }
    end
  end
end
