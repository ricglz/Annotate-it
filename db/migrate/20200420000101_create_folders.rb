class CreateFolders < ActiveRecord::Migration[6.0]
  def change
    create_table :folders, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
