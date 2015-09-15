class CreateExperiences < ActiveRecord::Migration
  def change
    create_table :experiences do |t|
      t.string :position
      t.string :company
      t.string :startdate
      t.string :enddate
      t.string :location
      t.text :duties
      t.string :url

      t.timestamps null: false
    end
  end
end
