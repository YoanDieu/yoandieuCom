class RemovePasswordToUsers < ActiveRecord::Migration
  def change
    remove_column :users, :digest_password, :string
  end
end
