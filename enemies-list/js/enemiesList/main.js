function main() {
  // Put your code here
  const enemies = [
    {
      FirstName: 'Joshua',
      LastName: 'Flowers',
      Offenses: [
        'Being a jerk to me in elementary school',
        'Not being nice to me in elementary school',
      ],
      isReallyHated: true
    },
    {
      FirstName: 'Darth',
      LastName: 'Vader',
      Offenses: [
        "Cut off Luke's hand",
        'Murdered all those kids',
        'Unkind management practices'
      ],
      isReallyHated: false
    },
    {
      FirstName: 'Betty',
      LastName: 'Rudelady',
      Offenses: [
        'Phone calls in theaters',
        'Phone calls on the bus',
        'Phone calls in line at the grocery store',
        'Poor conversationalist'
      ],
      isReallyHated: true
    },
    {
      FirstName: 'Leon',
      LastName: 'Peck',
      Offenses: [
        'keeps giving me a hotplate'
      ],
      isReallyHated: false
    }
  ]

  console.log('My Enemies List!')
  console.log('----------------')

  enemies.forEach(e => console.log(`${e.FirstName} ${e.LastName} ${e.isReallyHated ? '(Really, really dislike!)' : ''}`))

}

main();
