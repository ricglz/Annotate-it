FactoryBot.define do
  factory :tag do
    name { Faker::Beer.unique.brand }
    user
  end
end
