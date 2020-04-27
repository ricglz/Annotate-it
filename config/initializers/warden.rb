Rails.application.config.middleware.insert_after Rack::ETag, Warden::Manager do |manager|
  manager.failure_app = GraphqlController

  manager.serialize_into_session do |viewer|
    viewer.slice(:id)
  end

  manager.serialize_from_session do |attributes|
    User.find(attributes.symbolize_keys.values.first)
  end
end
