# frozen_string_literal: true

module Mutations
  RegisterMutation = GraphQL::Relay::Mutation.define do
    name 'Register'

    # Accessible from `inputs` in the resolve function:
    input_field :email, !types.String
    input_field :firstName, !types.String
    input_field :lastName, !types.String

    return_field :user, Types::UserType

    resolve lambda { |_, inputs, ctx|
      user = User.new(inputs)

      if user.save
        ctx[:warden].set_user(user)
        { user: user }
      else
        GraphQL::ExecutionError.new(
          'Something went wrong while creating the user'
        )
      end
    }
  end
end
