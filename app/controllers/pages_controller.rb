class PagesController < ApplicationController
  def home
  @project = Project.find(1)
  end
end
