class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :digest_password
      t.string :role

      t.timestamps null: false
    end
  end
end