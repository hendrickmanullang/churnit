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

    # @recommended_cards = CardSelector.new(
    #                         session[:onboarding][:income],
    #                         session[:onboarding][:spending]
    #                       ).call

    # # order_1 = :user_input_in_home
    # # order_2 = :user_input_in_home
    # # order_3 = :user_input_in_home
    # # order_4 = :user_input_in_home

    @recommended_cards = Card.where('minimum_income <= ?', params[:income])

    # # session[:recommended_cards] = @cards.map{|card| card.id}
    # # save the ids of the cards to the session[:cards] in an array of id's
  end

  def select
  end
end
