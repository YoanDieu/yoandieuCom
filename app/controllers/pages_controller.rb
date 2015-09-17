class PagesController < ApplicationController
  def home
  @project = Project.find(1)
  end

  def projects
    @projects = Project.all
  end

  def curiculum
    @formations = Formation.all
    @experiences = Experience.all
    @activities = Activity.all
  end

  def contact
  end

  def admin
    @user = current_user
  end

  def log_in
    user = User.find_by(name: params[:name])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/admin/users'
    else
      render 'admin'
    end
  end
end
