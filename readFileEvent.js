const fs = require("fs")

const reader = fs.createReadStream("sample.txt")
const writer = fs.createWriteStream("newfile.txt")

reader.on("data", chunk => {
    writer.write(chunk) // write data
})

reader.on("error", (err) => {
    console.log("error", err)
})

reader.on("end", () => {
    writer.end() 
})