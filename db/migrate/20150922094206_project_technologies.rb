class ProjectTechnologies < ActiveRecord::Migration
  def change
    create_table ProjectTechnologies:
    add_column ProjectTechnologies:, project_id:, :integer
    add_column ProjectTechnologies:, technology_id:, :integer
  end
end
