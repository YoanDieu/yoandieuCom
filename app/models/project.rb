class Project < ActiveRecord::Base
  has_many :project_technologies
  has_many :technologies, through: :project_technologies
end
