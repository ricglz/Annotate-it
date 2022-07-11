FactoryBot.define do
  factory :folder do
    name { Faker::Ancient.god }
    user
  end
end
