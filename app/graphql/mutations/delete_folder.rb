# frozen_string_literal: true

module Mutations
  class DeleteFolder < BaseMutation
    field :deleted_folder_id, ID, null: false

    argument :email, String, required: true
    argument :folder_id, ID, required: true

    def resolve(arguments)
      user = User.find_by(email: arguments[:email])
      raise GraphQL::ExecutionError, "This user doesn't exist" unless user

      folder = user.folders.find(arguments[:folder_id])
      unless folder
        raise GraphQL::ExecutionError, "This folder doesn't belong to the user"
      end

      folder.delete
      { deleted_folder_id: folder.id }
    end
  end
end
