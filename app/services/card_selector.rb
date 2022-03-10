class CardSelector
  def initialize(income, spending, card_selected)
    @income = income
    @spending = spending
    @card_selected = card_selected
  end

  def call
    # run algorithm and return card ids
    # sort taking variables of spending and income
    return Card.all
  end

  def sort
    puts "sorting"
  end
end
