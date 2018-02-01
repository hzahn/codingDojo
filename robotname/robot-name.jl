mutable struct Robot
    name
    age
    Robot() = new(randomName())
end

function reset!(robot)
    robot.name = randomName()
end

function randomName()
    randomLetter() * randomLetter() * randomDigit() * randomDigit() * randomDigit()
end

function randomLetter()
    string(floor(Int, rand() * 26) + 'A')
end

function randomDigit()
    string(floor(Int, rand() * 10) + '0')
end
