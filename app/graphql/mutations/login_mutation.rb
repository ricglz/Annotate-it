# frozen_string_literal: true

module Mutations
  LoginMutation = GraphQL::Relay::Mutation.define do
    # Used to name derived types, eg `"LoginMutation"`:
    name 'Login'

    # Accessible from `inputs` in the resolve function:
    input_field :email, !types.String

    return_field :user, Types::UserType

    resolve lambda { |_, inputs, ctx|
      user = User.find_by(email: inputs[:email])

      if user
        ctx[:warden].set_user(user)
        { user: user }
      else
        GraphQL::ExecutionError.new('Wrong email or password')
      end
    }
  end
end
