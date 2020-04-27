# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    description 'The query root of this schema'

    field :viewer, Types::UserType, null: true

    def viewer
      context[:viewer]
    end
  end
end
