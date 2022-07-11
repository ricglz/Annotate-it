class AddIndexToFolderName < ActiveRecord::Migration[6.0]
  def change
    add_index :folders, %i[name user_id], unique: true
  end
end
