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
  end

  def contact_send
    @contact = Contact.new(contact_params)

    if @contact.save
     ContactMailer.contact_email(@contact).deliver
    end

    redirect_to '/contact'
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

  def contact_params
    params.require(:contact).permit(:firstname, :lastname, :email, :subject, :message)
  end
end
