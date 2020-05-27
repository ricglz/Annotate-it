# frozen_string_literal: true

module Mutations
  class DeleteNote < BaseMutation
    field :deleted_note_id, ID, null: false

    argument :note_id, ID, required: true

    def resolve(arguments)
      raise GraphQL::ExecutionError, not_found(viewer) unless viewer

      note = viewer.notes.find(arguments[:note_id])
      raise GraphQL::ExecutionError, not_part_of_user(note) unless note

      note.delete
      { deleted_note_id: note.id }
    end
  end
end
