# frozen_string_literal: true
module Mutations
  class UpdateNoteContent < BaseMutation
    field :updated_note, Types::NoteType, null: false

    argument :email, String, required: true
    argument :note_id, ID, required: true
    argument :content, String, required: true

    def resolve(arguments)
      user = User.find_by(email: arguments[:email])
      raise GraphQL::ExecutionError, "This user doesn't exist" unless user

      note = user.notes.find(arguments[:note_id])
      unless note
        raise GraphQL::ExecutionError, "This note doesn't belong to the user"
      end

      note.update(content: arguments[:content])
      { updated_note: note }
    end
  end
end
