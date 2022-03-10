class CardSelector
  def initialize(income, spending, card_selected)
    @income = income
    @spending = spending
    @card_selected = card_selected
  end

  def call
    # run algorithm and return card ids
    sort
    # sort taking variables of spending and income
    return Card.all
  end

  def sort
    # grab all session attributes with @income, @spending, @card_selected => card_id
    @user_card = Card.find(@card_selected)
    @cards_sorted = Card.select { |card| card.minimum_income.to_i <= @income.to_i && card.annual_fee_after.to_i <= @user_card.annual_fee_after.to_i }
    @card_sorted = @cards_sorted.take(3)
    # compare reward of sorted cards

    # @recommended_cards = Card.where('minimum_income <= ?', params[:income]).order("annual_fee_after ASC")
    # filter card with session[:onboarding][:income]
    # @card = Card.where()
    # session[:onboarding]
  end
end
