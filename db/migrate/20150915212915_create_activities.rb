class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string :title
      t.string :type
      t.string :institution
      t.string :description
      t.string :github
      t.string :twitter
      t.string :url

      t.timestamps null: false
    end
  end
end
