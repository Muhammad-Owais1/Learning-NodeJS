const fs = require('fs')

// console.log(fs)

fs.writeFile('Fareed.txt', 'Fareed is a good boy.', () => {
    console.log('done')
})

fs.appendFile('fareed.txt', 'yes he is', (e) => {
    console.log('ddone')
})