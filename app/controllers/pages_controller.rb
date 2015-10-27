class PagesController < ApplicationController
  def home
    @home = true
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
    @contact = Contact.new
  end

  def contact_send
    @contact = Contact.new(contact_params)

    if @contact.save
     ContactMailer.contact_email(@contact).deliver
     flash[:success] = "Votre demande de contact à bien été prise en compte !"
       redirect_to '/contact'
    else
      render 'contact'
    end


  end

  def admin
    @user = current_user
  end

  def log_in
    user = User.find_by(name: params[:name])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/admin'
    else
      render 'admin'
    end
  end

  def show_project
    @project = Project.find(params[:id])
    puts @project.thumb
  end

  def contact_params
    params.require(:contact).permit(:firstname, :lastname, :email, :subject, :message)
  end
end
