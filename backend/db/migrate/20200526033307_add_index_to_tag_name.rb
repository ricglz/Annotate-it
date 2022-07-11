class AddIndexToTagName < ActiveRecord::Migration[6.0]
  def change
    add_index :tags, %i[name user_id], unique: true
  end
end
