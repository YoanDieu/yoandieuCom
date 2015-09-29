class ChangeTypeInActivitiesTable < ActiveRecord::Migration
  def change
    remove_column :activities, :type
    add_column :activities, :kind, :string
  end
end
