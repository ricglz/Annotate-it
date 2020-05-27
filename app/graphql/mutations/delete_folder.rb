# frozen_string_literal: true

module Mutations
  class DeleteFolder < BaseMutation
    field :deleted_folder_id, ID, null: false

    argument :folder_id, ID, required: true

    def resolve(arguments)
      raise GraphQL::ExecutionError, not_found(viewer) unless viewer

      folder = viewer.folders.find(arguments[:folder_id])
      raise GraphQL::ExecutionError, not_part_of_user(folder) unless folder

      folder.delete
      { deleted_folder_id: folder.id }
    end
  end
end
