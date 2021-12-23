const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// middleware - for body for POST/PUT
app.use(express.json())
app.use(express.urlencoded({extended:true}));

// If file does not exist - create & add an array. 
if(!fs.existsSync('music.json')){
    fs.writeFileSync('music.json','[]');
}

// In the main page - return HTML page
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/all', (req, res)=>{
    let musicArr = fs.readFileSync('music.json').toString();
    let x = JSON.parse(musicArr)
    // JSON.parse() - converts from string to JSON
    res.send(x);
    res.status(200); //OK
});

// Add new object(song) to the array (and update the file)
app.post('/add', (req, res)=> {

    let musicArr = fs.readFileSync('music.json').toString();
    musicArr = JSON.parse(musicArr);

    musicArr.push(req.body);

    fs.writeFileSync('music.json', JSON.stringify(musicArr));

    res.status(201); // created
    res.send("New song was added successfully");

})

// {id: 1, name: '', artist: '' , year: }

app.put('/update/:song', (req, res)=>{
    let musicArr = JSON.parse(fs.readFileSync('music.json'));
    let mySong = musicArr.find( song => song.name == req.params.song);
    if(mySong !== undefined){
        mySong.year = req.body.newYear;

        fs.writeFileSync('music.json', JSON.stringify(musicArr));
        res.send("song's year was updated successfully");
        res.status(200);
    }
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

app.listen(PORT, ()=>console.log(`Listening in PORT ${PORT}`))
