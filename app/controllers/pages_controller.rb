class PagesController < ApplicationController
  def home
    @home = true
    @project = Project.find(1)
  end

  def projects
    @pro = true
    @projects = Project.all
  end

  def curiculum
    @curi = true
    @formations = Formation.all
    @experiences = Experience.all
    @activities = Activity.all
  end

  def contact
    @cont = true
    @user = User.where(role: "Admin")
    contact = params[:contact]
    ContactMailer.contact_email(contact).deliver_now
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
