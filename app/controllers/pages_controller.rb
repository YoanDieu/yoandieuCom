class PagesController < ApplicationController
  def home
  @project = Project.find(1)
  end

  def admin
    user = User.where(name: params[:name]).first.try(authenticate: params[:password])

    if user && user.authenticate(params[:password])
      redirect_to '/admin/users'
    else
      render 'admin'
    end
  end
end
