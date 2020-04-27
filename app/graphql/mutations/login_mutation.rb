# frozen_string_literal: true

module Mutations
  class LoginMutation < Mutations::BaseMutation
    null true

    argument :email, String, required: true

    field :user, Types::UserType, null: true

    def resolve(email)
      user = User.find_or_create_by(email)
      if user
        context[:warden].set_user(user)
        { user: user }
      else
        GraphQL::ExecutionError.new('Wrong email or password')
      end
    end
  end
end
