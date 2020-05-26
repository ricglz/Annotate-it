class AddParanoiaIndexes < ActiveRecord::Migration[6.0]
  def change
    add_index :folders, :deleted_at
    add_index :notes, :deleted_at
    add_index :notes_tags, :deleted_at
    add_index :tags, :deleted_at
    add_index :users, :deleted_at
  end
end
