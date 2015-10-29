class AddResumeStartdateAndEnddateToProjectTable < ActiveRecord::Migration
  def change

    add_column :projects, :resume, :string
    add_column :projects, :startdate, :string
    add_column :projects, :enddate, :string
  end
end
