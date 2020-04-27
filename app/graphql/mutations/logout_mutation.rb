# frozen_string_literal: true

module Mutations
  LogoutMutation = GraphQL::Relay::Mutation.define do
    name 'Logout'

    return_field :user, Types::UserType

    resolve lambda { |_, _, ctx|
      ctx[:warden].logout
      { user: ctx[:viewer].user }
    }
  end
end
