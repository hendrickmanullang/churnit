class CardSelector
  def initialize(income, spending, card_selected)
    @income = income
    @spending = spending
    @card_selected = card_selected
  end

  def call
    # run algorithm and return card ids
    # sort taking variables of spending and income
    Card.all
    # Card.where('minimum_income < ?', params[:income])
  end

  def sort
    puts "sorting"
  end
end
