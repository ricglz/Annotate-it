FactoryBot.define do
  factory :note do
    content { Faker::Markdown.sandwich(sentences: 6, repeat: 3) }
    user
  end
end
