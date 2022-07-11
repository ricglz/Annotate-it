# frozen_string_literal: true

module Types
  # Edge type of folder
  class FolderEdgeType < GraphQL::Types::Relay::BaseEdge
    node_type(Types::FolderType)
  end
end
