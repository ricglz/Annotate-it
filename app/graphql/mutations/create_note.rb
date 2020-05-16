# frozen_string_literal: true

module Mutations
  class CreateNote < BaseMutation
    field :edge, Types::NoteType.edge_type, null: false

    argument :email, String, required: true
    argument :content, String, required: true
    argument :folder_id, ID, required: true

    def resolve(arguments)
      user = User.find_by(email: arguments[:email])
      raise GraphQL::ExecutionError, "This user doesn't exist" unless user

      note = Note.new(
        content: arguments[:content], user: user,
        folder_id: arguments[:folder_id]
      )
      unless note.save
        raise GraphQL::ExecutionError, "This note doesn't belong to the user"
      end

      range_add = GraphQL::Relay::RangeAdd.new(
        parent: user, collection: user.notes, item: note, context: context
      )
      { edge: range_add.edge }
    end
  end
end
