# frozen_string_literal: true

module Mutations
  class TagNote < BaseMutation
    field :tags, [Types::TagType.edge_type], null: false

    argument :note_id, ID, required: true
    argument :tags, [String], required: true

    def resolve(**args)
      raise GraphQL::ExecutionError, not_found(viewer) unless viewer

      note = viewer.notes.find(args[:note_id])
      raise GraphQL::ExecutionError, not_part_of_user(note) unless note

      tags_token = args[:tags]
      tags = Tag.where(user: viewer)
                .where('tags.id IN (?) OR tags.name IN (?)',
                       only_uuid(tags_token), tags_token)
      note.tags = tags
      { tags: tags.map { |tag| to_edge(tag, note) } }
    end

    private

    def only_uuid(tags)
      tags.filter { |tag| uuid_regex.match?(tag) }
    end

    def uuid_regex
      @uuid_regex ||= /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/
    end

    def to_edge(tag, note)
      GraphQL::Relay::RangeAdd.new(
        parent: note, collection: note.tags, item: tag, context: context
      ).edge
    end
  end
end
