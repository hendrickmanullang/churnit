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

    # Truncate the list of cards by excluding cards where minimum income exceeds user's income
    @truncated_list = Card.where('minimum_income <= ?', params[:income])

    # Apply a DYNAMIC SORT (user determined):

    ## Call order of drag & drop result from home page using $( "#sortable" ).sortable('toArray');
    ## This should result in an array of string consisting: ['fee', 'cashback', 'reward', 'foreign']
    ## Take the index of each string, and use active record queries to sort recommended cards
    ## The active record syntax will be be:

    ### fee = .order(annual_fee_after: :asc)
    ### cashback = .order(cashback_reward: :desc)
    ### reward = .order(bonus_point_reward: :desc)  -> need to find a way to standardise this value across all reward programs
    ### foreign = .order(foreign_transaction_fee: :asc)

    ### apply the order of preference below (will need to rewrite this code):

    @sortedcards1 = @truncated_list.order(annual_fee_init: :asc)
    @sortedcards2 = @sortedcards1.order(cashback_reward: :desc)
    @sortedcards3 = @sortedcards2.order(bonus_point_reward: :desc)
    @sortedcards4 = @sortedcards3.order(foreign_transaction_fee: :asc)

    ### Determine ChurnIT score (this will need to be reworked to take into account user's spending)
    @churnit_score = 'interest_free_period - annual_fee_after - interest_rate * 100 - late_payment_fee - foreign_transaction_fee * 100'

    # Apply ChurnIT score and STATIC SORT:
    @recommended_cards = @sortedcards4.order(Arel.sql(@churnit_score)).limit(3)

    # once completed, refactor using the Card Selector service
    # below is a sample syntax
    # @recommended_cards = CardSelector.new(
    #                         session[:onboarding][:income],
    #                         session[:onboarding][:spending]
    #                       ).call
  end

  def select
  end
end
