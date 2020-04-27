# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    description 'The query root of this schema'

    field :user, Types::UserType, null: true do
      description 'User entity'
      argument :id, ID, required: true
    end

    def user(id:)
      User.find(id)
    end
  end
end
