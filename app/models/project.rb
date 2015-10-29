class Project < ActiveRecord::Base
  has_many :project_technologies
  has_many :technologies, through: :project_technologies

  has_attached_file :cover, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :cover, content_type: /\Aimage\/.*\Z/
end
