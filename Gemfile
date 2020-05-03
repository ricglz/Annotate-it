# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.5'

gem 'bootsnap', '>= 1.4.2', require: false
gem 'graphql', '~> 1.10'
gem 'paranoia', '~> 2.2'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 4.1'
gem 'rack-cors'
gem 'rails', '~> 6.0.2', '>= 6.0.2.1'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
gem 'warden'

group :development, :test do
  gem 'brakeman', require: false
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'factory_bot'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'reek', require: false
  gem 'rspec-rails'
  gem 'rubocop', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
end
