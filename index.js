const http = require('http');
const fs = require('fs')




const server = http.createServer((request, response) => {
    // console.log(request)

    console.log(`looking for route: ${request.url}`)
    // console.log(server)

    if (request.url === '/') {


        // status Codes
        // lets us know the status of the request we make
        // type of information we are sending
        // type text
        response.writeHead(200, { 'Content-Type': 'text/html' });


        const readStream2 = fs.createReadStream(__dirname + '/index.html');
        readStream2.pipe(response)
    }
    else if (request.url === '/users') {
        response.writeHead(200, { 'Content-Type': 'application/json' })

        const obj = [
            {
                name: 'Flo',
                email: 'flo@me.com',
            },
            {
                name: 'Josh',
                email: 'josh@me.com',
            },
        ];

        response.end(JSON.stringify(obj))
    }
    else if (request.url === '/text') {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        const readStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf-8')

        // pipe/send it to response area
        // send data
        readStream.pipe(response)

    }
    //  now route the page to an /about route
    else if (request.url = '/about') {

        response.writeHead(200, { 'Content-Type': 'text/html' })
        const aboutPage = fs.createReadStream(__dirname + '/about.html')

        aboutPage.pipe(response)
    }

    else {
        response.writeHead(200, { 'Content-Type': 'text/html' })

        const readStream = fs.createReadStream(__dirname + '/404.html', 'utf-8')
        readStream.pipe(response)

    }



// closes response and logs message to user
// response.end('THis is my first node server')



// need somewhere fo it to listen
// port 3000

server.listen(3000, () => {
    console.log('Server listening on port 3000')
})


//=======================================================================//
//=======================================================================//
/*****************
 * //  CODE DROP *
 *****************/
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//     console.log(`Looking for route: ${req.url}`);
//     if (req.url === '/') {
//         res.writeHead(200, { 'content-type': 'text/html' });
//         const readStream2 = fs.createReadStream(__dirname + '/index.html');
//         readStream2.pipe(res);
//     } else if (req.url === '/users') {
//         res.writeHead(200, { 'content-type': 'application/json' });
//         const obj = [
//             {
//                 name: 'Flo',
//                 email: 'flo@me.com'
//             },
//             {
//                 name: 'Josh',
//                 email: 'josh@me.com'
//             }
//         ];
//         res.end(JSON.stringify(obj));
//     } else if (req.url === '/text') {
//         res.writeHead(200, { 'content-type': 'text/plain' }); // header
//         const readStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8'); //prepare data to send
//         readStream.pipe(res);
//     }
// });
// server.listen(3000, () => {
//     console.log('Server listening on port 3000');
// });