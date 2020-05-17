class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.text :content
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.references :folder, foreign_key: true, type: :uuid
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
