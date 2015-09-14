class PagesController < ApplicationController
  def home
  @project = Project.find(1)
  end

  def admin

  end
end
