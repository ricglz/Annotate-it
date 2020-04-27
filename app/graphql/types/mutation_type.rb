module Types
  class MutationType < Types::BaseObject
    field :register_mutation, mutation: Mutations::RegisterMutation
    field :logout_mutation, mutation: Mutations::LogoutMutation
    field :login_mutation, mutation: Mutations::LoginMutation
    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World"
    end
  end
end
