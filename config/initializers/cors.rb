Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:3000', 'https://annotate-it-25533.firebaseapp.com',
            'https://annotate-it-25533.web.app'
    resource '*', headers: :any, methods: %i[post]
  end
end
