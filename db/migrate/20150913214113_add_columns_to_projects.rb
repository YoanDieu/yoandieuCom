class AddColumnsToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :title, :string
    add_column :projects, :thumb, :string
    add_column :projects, :descrition, :text
    add_column :projects, :tweet, :string
    add_column :projects, :github, :string
    add_column :projects, :url, :string

  end
end
