# frozen_string_literal: true

module Mutations
  class RenameFolder < BaseMutation
    field :folder, Types::FolderType, null: false

    argument :email, String, required: true
    argument :name, String, required: true
    argument :folder_id, ID, required: true

    def resolve(arguments)
      user = User.find_by(email: arguments[:email])
      raise GraphQL::ExecutionError, "This user doesn't exist" unless user

      folder = user.folders.find(arguments[:folder_id])
      unless folder.save
        raise GraphQL::ExecutionError, "This folder doesn't belong to the user"
      end

      folder.update(name: arguments[:name])
      { folder: folder }
    end
  end
end
