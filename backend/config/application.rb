require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"

Bundler.require(*Rails.groups)

module ProjectBackend
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    config.api_only = true

    config.generators do |g|
      g.channel         assets: false
      g.helper          false
      g.javascripts     false
      g.orm             :active_record, primary_key: :uid
      g.stylesheets     false
      g.test_framework  false
    end
  end
end
