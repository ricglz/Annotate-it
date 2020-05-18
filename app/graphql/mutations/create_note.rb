# frozen_string_literal: true

module Mutations
  class CreateNote < BaseMutation
    field :edge, Types::NoteType.edge_type, null: false

    argument :content, String, required: true
    argument :folder_id, ID, required: true

    def resolve(arguments)
      raise GraphQL::ExecutionError, "This viewer doesn't exist" unless viewer

      note = Note.new(
        content: arguments[:content], user: viewer,
        folder_id: arguments[:folder_id]
      )
      unless note.save
        raise GraphQL::ExecutionError, "This note doesn't belong to the viewer"
      end

      range_add = GraphQL::Relay::RangeAdd.new(
        parent: viewer, collection: viewer.notes, item: note, context: context
      )
      { edge: range_add.edge }
    end
  end
end
