class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    enable_extension 'pgcrypto' unless extension_enabled?('pgcrypto')
    create_table :users, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
