# frozen_string_literal: true

module Mutations
  class LoginMutation < Mutations::BaseMutation
    argument :email, String, required: true
    argument :password, String, required: true
    argument :name, String, required: false

    field :viewer, Types::UserType, null: true

    def resolve(**args)
      viewer = User.find_by(email: args[:email])
      viewer ||= User.create(args)
      unless viewer.authenticate(args[:password])
        raise GraphQL::ExecutionError, 'Incorrect password'
      end

      { viewer: viewer }
    end
  end
end
