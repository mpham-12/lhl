class Question
  attr_reader :num1, :num2

  def initialize
    @num1 = rand(21)
    @num2 = rand(21)
  end

  def q
    "What is #{num1} + #{num2}?"
  end

end


# question = Question.new
# puts question.q
