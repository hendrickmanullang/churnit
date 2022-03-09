class CardSelector
  def initialize(income, spending)
    @income = income
    @spending = spending
  end

  def call
    # run algorithm and return card ids
    return Card.all
  end
end
