# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :tag_note, mutation: Mutations::TagNote
    field :create_tag, mutation: Mutations::CreateTag
    field :create_note, mutation: Mutations::CreateNote
    field :rename_folder, mutation: Mutations::RenameFolder
    field :create_folder, mutation: Mutations::CreateFolder
    field :delete_folder, mutation: Mutations::DeleteFolder
    field :delete_note, mutation: Mutations::DeleteNote
    field :update_note_content, mutation: Mutations::UpdateNoteContent
    field :login_mutation,
          mutation: Mutations::LoginMutation,
          null: false
  end
end
