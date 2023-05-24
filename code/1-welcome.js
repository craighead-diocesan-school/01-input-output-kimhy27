// ####################################
// ######## ----- Welcome ----- #######
// ####################################

function welcome() {
  let name = prompt("what's your name?")


  alert('We want to know if you like programming!')

  let answer = prompt('Do you like programming ' + name + '?')

  alert('Great, you said ' + answer + '!')
  alert("Let's learn some code today.")
}

function questionnaire() {
  let name = prompt("what's your name?")
  alert('What a cool name, ' + name + '!')

  let breakfast = prompt('What did you have for breakfast, ' + name + '?')
  alert('Wow, ' + breakfast + ' sounds delicious!')

  let colour = prompt ('What is your favourite colour, ' + name + '?')
  alert('I like ' + colour + ' too!')

  let age = prompt ('How old are you, ' + name + '?')
  age = Number(age)
  age = age+1
  alert ('You will be ' + age + ' years old on your next birthday!')

  
}
