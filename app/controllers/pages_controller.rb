class PagesController < ApplicationController
  def home
    @home = true
  end

  def projects
    @pro = true
    @projects = Project.all
  end

  def curriculum
    @curi = true
    @formations = Formation.all.reverse
    @experiences = Experience.all.reverse
    @activities = Activity.all.reverse

  end

  def contact
    @cont = true
    @contact = Contact.new
  end

  def contact_send
    @contact = Contact.new(contact_params)

    if @contact.save
     ContactMailer.contact_email(@contact).deliver
     flash[:success] = "Votre demande de contact a bien été prise en compte !"
       redirect_to '/contact'
    else
      flash[:error] = "Veuillez renseigner les champs indiqués en rouge."
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
  end

  def contact_params
    params.require(:contact).permit(:firstname, :lastname, :email, :subject, :message)
  end
end
