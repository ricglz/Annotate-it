# frozen_string_literal: true

module Mutations
  class TagNote < BaseMutation
    field :tags, [Types::TagType.edge_type], null: false

    argument :note_id, ID, required: true
    argument :tags, [String], required: true

    def resolve(**args)
      raise GraphQL::ExecutionError, "This viewer doesn't exist" unless viewer

      note = viewer.notes.find(args[:note_id])
      unless note
        raise GraphQL::ExecutionError, "This note doesn't belong to the viewer"
      end

      tags_token = args[:tags]
      tags = Tag.where(user: viewer)
                .where('tags.id IN (?) OR tags.name IN (?)',
                       tags_token, tags_token)
      note.tags = tags
      { tags: tags.map { |tag| to_edge(tag, note) } }
    end

    private

    def to_edge(tag, note)
      GraphQL::Relay::RangeAdd.new(
        parent: note, collection: note.tags, item: tag, context: context
      ).edge
    end
  end
end
