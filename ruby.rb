# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
  attr_accessor :model, :wheels, :current_speed
  def initialize(model)
    @model = model
    @wheels = 2
    @current_speed = 0
  end

  # Method that takes number as parameter and adds it to current speed which will always start with 0
  def pedal_faster(number)
    @current_speed += number
  end 
  
  # Method that takes a number as parameter and adds to the wheels. but you cant exceed more that 3 since we only make tricycles! 
  def tricycle(number)
    if @wheels + number > 3
      p "we only make tricycles!"
    else 
      @wheels += number
    end
  end

  # Method that takes number as parameter and starts that if that current speed - number is less then 0 then just return 0. this way it cant be negative. if not < 0 then take that Current speed and minus the number passed as the argument.
  def brake(number)
    if @current_speed - number < 0
       @current_speed = 0
    else 
      @current_speed -= number
    end
  end

  # using string interpoloation prints a sentence that takes model wheelsand current speed whick are instant variables and returns whatever the data is = to.
  def bike_info()
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end

end

Bike.new('Trek')
giant_tcr = Bike.new('Giant TCR')
giant_tcr.pedal_faster(20)
giant_tcr.tricycle(1)
# giant_tcr.brake(25)
p giant_tcr.bike_info
p giant_tcr