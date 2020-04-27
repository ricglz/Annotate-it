# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :login_mutation,
          mutation: Mutations::LoginMutation,
          null: false

    field :logout_mutation,
          mutation: Mutations::LogoutMutation,
          null: false
  end
end
