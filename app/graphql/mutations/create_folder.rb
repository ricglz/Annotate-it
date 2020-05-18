# frozen_string_literal: true

module Mutations
  class CreateFolder < BaseMutation
    field :edge, Types::FolderType.edge_type, null: false

    argument :name, String, required: true

    def resolve(arguments)
      raise GraphQL::ExecutionError, "This viewer doesn't exist" unless viewer

      folder = Folder.new(name: arguments[:name], user: viewer)
      unless folder.save
        raise GraphQL::ExecutionError,
              "This folder doesn't belong to the viewer"
      end

      range_add = GraphQL::Relay::RangeAdd.new(
        parent: viewer, collection: viewer.folders, item: folder,
        context: context
      )
      { edge: range_add.edge }
    end
  end
end
