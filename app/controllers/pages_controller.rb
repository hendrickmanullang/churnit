class PagesController < ApplicationController
  # skip_before_action :authenticate_user!, only: :home
  before_action :configure_permitted_parameters, if: :devise_controller?

  def home
    @cards = Card.all
  end
end
