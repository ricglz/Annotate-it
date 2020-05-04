Rails.application.config.middleware.insert_after Rack::ETag, Warden::Manager do |manager|
  manager.failure_app = GraphqlController

  manager.serialize_into_session do |viewer|
    viewer.slice(:id)
  end

  manager.serialize_from_session do |attributes|
    User.find(attributes.values.first)
  end
end

# Warden::Manager.after_set_user do |user,auth,opts|
  # scope = opts[:scope]
  # auth.cookies.signed["#{scope}.id"] = user.id
  # auth.cookies.signed["#{scope}.expires_at"] = 60.minutes.from_now
# end

# Warden::Manager.before_logout do |user, auth, opts|
  # scope = opts[:scope]
  # auth.cookies.signed["#{scope}.id"] = nil
  # auth.cookies.signed["#{scope}.expires_at"] = nil
# end
