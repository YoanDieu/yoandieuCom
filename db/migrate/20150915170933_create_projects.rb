class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.string :thumb
      t.text :description
      t.string :github
      t.string :twitter
      t.string :url

      t.timestamps null: false
    end
  end
end