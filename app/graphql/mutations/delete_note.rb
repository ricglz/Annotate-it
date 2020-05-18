# frozen_string_literal: true

module Mutations
  class DeleteNote < BaseMutation
    field :deleted_note_id, ID, null: false

    argument :note_id, ID, required: true

    def resolve(arguments)
      raise GraphQL::ExecutionError, "This viewer doesn't exist" unless viewer

      note = viewer.notes.find(arguments[:note_id])
      unless note
        raise GraphQL::ExecutionError, "This note doesn't belong to the viewer"
      end

      note.delete
      { deleted_note_id: note.id }
    end
  end
end
