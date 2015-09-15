class PagesController < ApplicationController
  def home
  @project = Project.find(1)
  end

  def admin

  end

  def log_in
    user = User.find_by(name: params[:name])

    if user && user.authenticate(params[:password])
      redirect_to '/admin/users'
    else
      render 'admin'
    end
  end
end
