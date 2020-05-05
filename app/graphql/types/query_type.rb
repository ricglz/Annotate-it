# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    description 'The query root of this schema'

    field :viewer, Types::UserType, null: true do
      argument :email, String, required: true
      argument :password, String, required: true
    end

    def viewer(email, password)
      user = User.find_by(email: email)
      user.authenticate(password) ? user : nil
    end
  end
end
