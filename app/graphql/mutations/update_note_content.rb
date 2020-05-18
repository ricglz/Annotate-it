# frozen_string_literal: true

module Mutations
  class UpdateNoteContent < BaseMutation
    field :updated_note, Types::NoteType, null: false

    argument :note_id, ID, required: true
    argument :content, String, required: true

    def resolve(arguments)
      raise GraphQL::ExecutionError, "This viewer doesn't exist" unless viewer

      note = viewer.notes.find(arguments[:note_id])
      unless note
        raise GraphQL::ExecutionError, "This note doesn't belong to the viewer"
      end

      note.update(content: arguments[:content])
      { updated_note: note }
    end
  end
end
