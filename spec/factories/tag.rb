FactoryBot.define do
  factory :tag do
    name { Faker::Beer.brand }
    user
  end
end
