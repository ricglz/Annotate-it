# frozen_string_literal: true

module Mutations
  class LoginMutation < Mutations::BaseMutation
    argument :email, String, required: true
    argument :password, String, required: true
    argument :name, String, required: false

    field :viewer, Types::UserType, null: true

    def resolve(email, password, name)
      name ||= ''
      viewer = User.find_by(email: email)
      viewer ||= User.create(email: email, password: password, name: name)
      unless viewer.authenticate(password)
        raise GraphQL::ExecutionError, 'Incorrect password'
      end

      { viewer: viewer }
    end
  end
end
