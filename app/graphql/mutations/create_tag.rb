# frozen_string_literal: true

module Mutations
  class CreateTag < BaseMutation
    field :edge, Types::TagType.edge_type, null: false

    argument :name, String, required: true

    def resolve(**args)
      raise GraphQL::ExecutionError, not_found(viewer) unless viewer

      tag = Tag.new(name: args[:name], user: viewer)
      raise GraphQL::ExecutionError, object_errors(tag) unless tag.save

      range_add = GraphQL::Relay::RangeAdd.new(
        parent: viewer, collection: viewer.tags, item: tag, context: context
      )
      { edge: range_add.edge }
    end
  end
end
