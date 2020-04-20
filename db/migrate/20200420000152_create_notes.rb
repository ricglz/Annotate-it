class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.text :content
      t.references :user, null: false, foreign_key: true
      t.references :folder, foreign_key: true
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
