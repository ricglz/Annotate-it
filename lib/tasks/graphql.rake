# frozen_string_literal: true

namespace :graphql do
  desc 'Creates the schema of the current state of graphql'
  task create_schema: :environment do
    schema_defn = ProjectBackendSchema.to_definition
    # Choose a place to write the schema dump:
    schema_path = 'app/graphql/schema.graphql'
    # Write the schema dump to that file:
    File.write(Rails.root.join(schema_path), schema_defn)
    puts "Updated #{schema_path}"
  end
end
