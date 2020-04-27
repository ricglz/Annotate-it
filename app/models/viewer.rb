# frozen_string_literal: true

class Viewer < Dry::Struct
  constructor :schema

  attribute :id, Types::Strict::String.optional.default(nil)
  attribute :role, Types::Role.optional.default(nil)

  def logged_in?
    id
  end

  def user
    return if id.blank?

    @user ||= User.find(id)
  end
end
