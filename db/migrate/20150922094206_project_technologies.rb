class ProjectTechnologies < ActiveRecord::Migration
  def change
    create_table :project_technologies
    add_column :project_technologies, :project_id, :integer
    add_column :project_technologies, :technology_id, :integer
  end
end
