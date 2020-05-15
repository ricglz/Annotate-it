# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :update_note_content, mutation: Mutations::UpdateNoteContent
    field :login_mutation,
          mutation: Mutations::LoginMutation,
          null: false
  end
end
