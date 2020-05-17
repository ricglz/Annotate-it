class CreateNotesTags < ActiveRecord::Migration[6.0]
  def change
    create_table :notes_tags, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.references :note, null: false, foreign_key: true, type: :uuid
      t.references :tag, null: false, foreign_key: true, type: :uuid
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
