class RemoveLogoStringColumnFromTechnolgyTable < ActiveRecord::Migration
  def change
    remove_column :technologies, :logo
  end
end
