
const fs = require('fs').promises;

async function readAndWriteMultipleFiles() {
    
    const data1 = await fs.readFile('test1.txt');
    console.log('data1');
    const data2 = await fs.readFile('test2.1txt');
    console.log('data2');
    const data3 = await fs.readFile('test3.txt');
    console.log('data3');
    const combinedData = data1 + data2 + data3;
    fs.writeFile('samplefile.txt', combinedData)
        
}
readAndWriteMultipleFiles().then(() => {
    console.log('Successfully written data into the file..');
}).catch((ex) => console.log(ex));


