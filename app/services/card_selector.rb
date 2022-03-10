class CardSelector
  def initialize(income, spending)
    @income = income
    @spending = spending
  end

  def call
    # run algorithm and return card ids
    # sort taking variables of spending and income
    # Card.where('minimum_income <= ?', params[@income])
  end

  def sort
    puts "sorting"
  end
end
