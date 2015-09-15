class CreateFormations < ActiveRecord::Migration
  def change
    create_table :formations do |t|
      t.string :name
      t.string :institution
      t.string :startdate
      t.string :enddate
      t.text :skills
      t.string :certificate
      t.string :url

      t.timestamps null: false
    end
  end
end
