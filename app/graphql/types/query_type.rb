# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    description 'The query root of this schema'

    field :viewer, Types::UserType, null: true do
      argument :email, String, required: true
      argument :password, String, required: true
    end

    def viewer(**args)
      user = User.find_by(email: args[:email])
      user.authenticate(args[:password]) ? user : nil
    end
  end
end
