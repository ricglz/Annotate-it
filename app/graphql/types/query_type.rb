# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    description 'The query root of this schema'

    field :viewer, Types::ViewerType, null: false do
      resolve ->(_, _, ctx) { ctx[:viewer] }
    end
  end
end
