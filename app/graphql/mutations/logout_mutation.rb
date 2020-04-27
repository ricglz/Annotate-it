# frozen_string_literal: true

module Mutations
  class LogoutMutation < Mutations::BaseMutation
    null true

    field :user, Types::UserType, null: true

    def resolve
      context[:warden].logout
      { user: context[:viewer].user }
    end
  end
end
