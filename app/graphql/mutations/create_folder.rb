# frozen_string_literal: true

module Mutations
  class CreateFolder < BaseMutation
    field :edge, Types::FolderType.edge_type, null: false

    argument :email, String, required: true
    argument :name, String, required: true

    def resolve(arguments)
      user = User.find_by(email: arguments[:email])
      raise GraphQL::ExecutionError, "This user doesn't exist" unless user

      folder = Folder.new(name: arguments[:name], user: user)
      unless folder.save
        raise GraphQL::ExecutionError, "This folder doesn't belong to the user"
      end

      range_add = GraphQL::Relay::RangeAdd.new(
        parent: user, collection: user.folders, item: folder, context: context
      )
      { edge: range_add.edge }
    end
  end
end
