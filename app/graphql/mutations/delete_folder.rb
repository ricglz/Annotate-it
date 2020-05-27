# frozen_string_literal: true

module Mutations
  class DeleteFolder < BaseMutation
    field :deleted_folder_id, ID, null: false

    argument :folder_id, ID, required: true

    def resolve(arguments)
      raise GraphQL::ExecutionError, not_found(viewer) unless viewer

      id = arguments[:folder_id]
      folder = viewer.folders.find(id)
      raise GraphQL::ExecutionError, not_part_of_user(folder) unless folder

      folder.really_destroy!
      { deleted_folder_id: id }
    end
  end
end
