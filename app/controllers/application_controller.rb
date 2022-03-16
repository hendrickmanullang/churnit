class ApplicationController < ActionController::Base
  # before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  # For additional fields in app/views/devise/registrations/new.html.erb
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:email, :password, :avatar, :username) }
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:avatar, :email, :password, :current_password, :username) }
  end
  # For additional in app/views/devise/registrations/edit.html.erb

  # def default_url_options
  #   { host: ENV["DOMAIN"] || "localhost:3000" }
  # end
end
