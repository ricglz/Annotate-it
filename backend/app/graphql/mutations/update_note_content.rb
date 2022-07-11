# frozen_string_literal: true

module Mutations
  class UpdateNoteContent < BaseMutation
    field :updated_note, Types::NoteType, null: false

    argument :note_id, ID, required: true
    argument :content, String, required: true

    def resolve(arguments)
      raise GraphQL::ExecutionError, not_found(viewer) unless viewer

      note = viewer.notes.find(arguments[:note_id])
      raise GraphQL::ExecutionError, not_part_of_user(note) unless note

      note.update(content: arguments[:content])
      { updated_note: note }
    end
  end
end
