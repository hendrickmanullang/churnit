class CardsController < ApplicationController
  # skip_before_action :authenticate_user!, only: :compare

  def index
    @cards = Card.all
  end

  def show
  end

  def compare
    session[:onboarding] = {} if session[:onboarding].nil?
    session[:onboarding][:income] = params[:income] if params[:income]
    session[:onboarding][:spending] = params[:spending] if params[:spending]
    session[:onboarding][:card_selected] = params[:card_selected] if params[:card_selected]
    # use info stored in session to return cards that pertain to this user
    @recommended_cards = CardSelector.new(
                            session[:onboarding][:income],
                            session[:onboarding][:spending],
                            session[:onboarding][:card_selected]
                          ).call

    # session[:recommended_cards] = @cards.map{|card| card.id}
    # save the ids of the cards to the session[:cards] in an array of id's
  end

  def select
  end
end
