class SessionsController < ApplicationController

def new

end

def create
  user = User.find_by_name(params[:name])

  if user && user.authenticate(params[:password])
    session[:user_id] = user.id
    redirect_to '/admin/users'
  else
    render 'admin'
  end
end

def destroy
  session[:user_id] = nil
  redirect_to '/admin'
end

end
