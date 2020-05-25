# frozen_string_literal: true

module Mutations
  class CreateTag < BaseMutation
    field :edge, Types::TagType.edge_type, null: false

    argument :name, String, required: true

    def resolve(**args)
      raise GraphQL::ExecutionError, "This viewer doesn't exist" unless viewer

      tag = Tag.new(name: args[:name], user: viewer)
      unless tag.save
        raise GraphQL::ExecutionError, "This tag doesn't belong to the viewer"
      end

      range_add = GraphQL::Relay::RangeAdd.new(
        parent: viewer, collection: viewer.tags, item: tag, context: context
      )
      { edge: range_add.edge }
    end
  end
end
