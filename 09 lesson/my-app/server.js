const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// middleware - for POST & PUT requests(get the body from request). 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// keep the data in external JSON file
// if file doesn't exist - create & add empty array
if(!fs.existsSync('music.json'))
    fs.writeFileSync('music.json', '[]');

// Show an external file - html
app.get('/', (req, res)=>{
    // __dirname - directory name(constant variable)
    res.sendFile(__dirname + '/index.html');
})

// Send the array of songs to the client:
app.get('/all', (req, res)=>{
    let musicArr = fs.readFileSync('music.json').toString();
    res.send(musicArr);
    res.status(200); // OK
})

// Get new song from client - and add it to the array (and to the file). 
app.post('/add', (req, res)=>{
    // get all the array from the file & convert to JSON array
    let musicArr = JSON.parse(fs.readFileSync('music.json').toString());

    // add the new song from req.body to the array
    musicArr.push(req.body);

    // write new array back to the file
    fs.writeFileSync('music.json', JSON.stringify(musicArr));

    res.send('new song was added successfully');
    res.status(201); // created!
})

// Update the song's year
// params - song's name, body - new year. 
app.put('/update/:song', (req, res)=>{
    // get all the array from the file & convert to JSON array
    let musicArr = JSON.parse(fs.readFileSync('music.json').toString());

    // find - return the first element that return true for condition:
    let mySong = musicArr.find(x => x.name === req.params.song);

    if(mySong !== undefined){
        mySong.year = req.body.newYear;
        // write new array back to the file
        fs.writeFileSync('music.json', JSON.stringify(musicArr));
        res.send("song's year was updated successfully");
    }

    res.send("No song was updated!");
});

// Delete a song by it's ID
app.delete('/delete/:id', (req, res)=>{
     // get all the array from the file & convert to JSON array
     let musicArr = JSON.parse(fs.readFileSync('music.json').toString());

    let len = musicArr.length;

    // params we get as string. + prefix - will convert it to number
    musicArr = musicArr.filter(s => s.id != +req.params.id);

    // if a song was deleted:
    if(musicArr.length < len){
        fs.writeFileSync('music.json', JSON.stringify(musicArr));
        res.send("song was deleted successfully");
    }

    res.send('no song was deleted'); 
    
})

app.listen(PORT, ()=>console.log(`Listening in port ${PORT}`));
