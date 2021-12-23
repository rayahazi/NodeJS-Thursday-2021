# NodeJS-Thursday-2021


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<!-- onload - when the page finished loading - run the function -->
<body onload="get()">
    
    <h3>Songs list...</h3>
    <table id="songs" border="1"></table>

    <h3>Add a new song...</h3>

    <!-- Form for POST requests - add a new song: -->
    <form>
        <label for="sid">ID: </label> <input type="number" id="sid"/>
        <label for="sname">Name: </label> <input type="text" id="sname"/>
        <label for="sartist">Artist: </label> <input type="text" id="sartist"/>
        <label for="syear">Year: </label> <input type="number" id="syear"/>

        <br>
        <br>

        <button onclick="post()">Add the song</button>
    </form>

    <script>

        // XMLHttpRequest - allow us to get data from URL, with method
        function get(){

            let req = new XMLHttpRequest();
            // open(method: string, url: string | URL): void
            req.open('GET', 'http://localhost:3000/all');

            // in XMLHTTPrequest we have states. 4 -> DONE (operation is complete)
            req.onreadystatechange = () => {
                // if request finished loading: 
                if(req.readyState === 4){
                    // req.response -> the data that returns from that URL.
                    // the result comes back as a string. 
                    // we convert to JSON so we can use it as array. 
                    let arr = JSON.parse(req.response);
                    let result = '';
                    result += `<th>ID </th><th>Name </th>
                    <th>Artist </th><th>Year </th>`

                    for (const song of arr) {
                        // tr - table row, td - table data(each cell). 
                        result += `
                        <tr>
                            <td>${song.id}</td>
                            <td>${song.name}</td>
                            <td>${song.artist}</td>
                            <td>${song.year}</td>
                        </tr>
                        `
                    }

                    document.getElementById('songs').innerHTML = result; 
                }
                
            }
            req.send();
        }


        
        /* POST request:
            1. get the user input.
            2. Create request -> it will go to the URL for POST requests 
            3. When request finished -> reload the table. 
            4. define header - application/json. 
            5. send request with body. 


        */

        function post(){

            // get all the values from the inputs:
            let sid = document.getElementById('sid').value;
            let sname = document.getElementById('sname').value;
            let sartist = document.getElementById('sartist').value;
            let syear = document.getElementById('syear').value;

            // create a request to `localhost:3000/add`, with body - data. 
            let req = new XMLHttpRequest();
            req.open('POST', 'http://localhost:3000/add');

            req.onreadystatechange = () =>{
                // when the request finished, and new song was inserted, 
                // refresh the table -> and show also the new song. 
                if(req.readyState === 4) get();
            }

            // define header for request:
            req.setRequestHeader('Content-type', 'application/json');

            // we define the body - in the send() method:
            req.send(JSON.stringify({"id":sid, "name":sname, 
                      "artist":sartist, "year":syear}));
        }

    </script>

</body>
</html>
```
