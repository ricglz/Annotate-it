# frozen_string_literal: true

module Mutations
  class DeleteNote < BaseMutation
    field :deleted_note_id, ID, null: false

    argument :email, String, required: true
    argument :note_id, ID, required: true

    def resolve(arguments)
      user = User.find_by(email: arguments[:email])
      raise GraphQL::ExecutionError, "This user doesn't exist" unless user

      note = user.notes.find(arguments[:note_id])
      unless note
        raise GraphQL::ExecutionError, "This note doesn't belong to the user"
      end

      note.delete
      { deleted_note_id: note.id }
    end
  end
end
