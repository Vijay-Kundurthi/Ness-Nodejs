const { error } = require('console')
const fs = require('fs') // inbuilt module
const path = require('path') // inbuilt module
/*
try {
    const fileName = path.join(__dirname, 'samplefile.txt');
    const data = fs.readFileSync(fileName);
    console.log('Reading the file', data.toString());
} catch(error) {
    console.log('Error reading the file', error);
    
}*/



// fs.writeFile('samplefile.txt', 'welcome to nodejs', (err) => {
//     if (err) {
//         console.log('Error writing data into the file', err);
//     } else {
//         console.log('write operation succesful');
//     }
// })

fs.readFile('samplefile.txt', (error, data) => {
    if (error) {
        console.log('Error reading the file', error);
    } else {
        console.log(data.toString());
    }
})



let buffer = new Buffer.from('GeeksforGeeks: '
	+ 'A computer science portal for geeks\n'); 

fs.open('samplefile.txt', 'a', function(err, fd) { 

	if(err) { 
		console.log('Cant open file'); 
	}else { 
		fs.write(fd, buffer, 0, buffer.length, 
				0, function(err,writtenbytes) { 
			if(err) { 
				console.log('Cant write to file'); 
			}else { 
				console.log(writtenbytes + 
					' characters added to file'); 
			} 
		}) 
	} 
}) 
