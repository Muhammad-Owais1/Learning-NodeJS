import fs from 'fs/promises'

let a = await fs.readFile('Fareed.txt')


let b = await fs.writeFile('Fareed.txt', '\n\n\n\nthis is good')

console.log(a.toString(), b)