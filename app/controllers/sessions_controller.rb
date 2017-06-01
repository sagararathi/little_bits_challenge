class SessionsController < ApplicationController
  def new
  end
  def create
    if safe_params[:username].present? && valid_email?
      session[:username] = safe_params[:username]
      session[:email]    = safe_params[:email]
      redirect_to root_path
    else
      flash[:error] = 'Please enter valid information.'
      redirect_to login_path
    end
  end

  private
  def safe_params
    params.require(:session).permit(:username, :email)
  end

  def valid_email?
    (/\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i).match(safe_params[:email])
  end
end
