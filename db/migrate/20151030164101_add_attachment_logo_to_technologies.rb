class AddAttachmentLogoToTechnologies < ActiveRecord::Migration
  def self.up
    change_table :technologies do |t|
      t.attachment :logo
    end
  end

  def self.down
    remove_attachment :technologies, :logo
  end
end
