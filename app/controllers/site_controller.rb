class SiteController < ApplicationController
  before_filter :check_session
  def index; end

  def show; end

  private
  def check_session
    unless session[:username].present?
      redirect_to login_path
    end
  end
end
