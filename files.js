const fs = require('fs');

//reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });



//writing files
// fs.writeFile('./docs/blog1.txt', 'hello kenneth', () => {
//     console.log('file was written');
// })

//directories
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created')
})