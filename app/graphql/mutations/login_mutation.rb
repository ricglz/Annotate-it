# frozen_string_literal: true

module Mutations
  class LoginMutation < Mutations::BaseMutation
    argument :email, String, required: true

    field :viewer, Types::UserType, null: true

    def resolve(email)
      viewer = User.find_or_create_by(email)
      context[:warden].set_user(viewer, scope: :admin)
      { viewer: viewer }
    end
  end
end
