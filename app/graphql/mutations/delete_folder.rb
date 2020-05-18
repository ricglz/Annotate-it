# frozen_string_literal: true

module Mutations
  class DeleteFolder < BaseMutation
    field :deleted_folder_id, ID, null: false

    argument :folder_id, ID, required: true

    def resolve(arguments)
      raise GraphQL::ExecutionError, "This viewer doesn't exist" unless viewer

      folder = viewer.folders.find(arguments[:folder_id])
      unless folder
        raise GraphQL::ExecutionError,
              "This folder doesn't belong to the viewer"
      end

      folder.delete
      { deleted_folder_id: folder.id }
    end
  end
end
