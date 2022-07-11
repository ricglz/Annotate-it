# frozen_string_literal: true

module Mutations
  class LoginMutation < Mutations::BaseMutation
    argument :email, String, required: true
    argument :password, String, required: true
    argument :name, String, required: false

    field :token, String, null: false

    def resolve(**args)
      viewer = User.find_by(email: args[:email]) || User.create(args)
      unless viewer.authenticate(args[:password])
        raise GraphQL::ExecutionError, 'Incorrect password'
      end

      { token: JsonWebToken.encode(viewer_id: viewer.id) }
    end
  end
end
