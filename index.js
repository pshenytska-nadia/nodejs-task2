const mostRepeatedLetter = require('nodejs-task1')
const { readFile } = require('fs')

const filePath = process.argv[2] || './files/template.txt'

console.log(`Argument haha: ${process.argv[2]}`)
console.log(`File path: ${filePath}`)

readFile(filePath, (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    console.log(mostRepeatedLetter(data.toString()))
    console.log(data.toString())
})