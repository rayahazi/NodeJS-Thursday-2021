# HTTP protocol

##### HTTP = HyperText Transfer Protocol

Is the internet protocol

- HTTP - port 80
- HTTPS - secured - port 443

#### GET

Retrieves a data from a server.

- body - optional

#### POST

Submit data to the server.

- body - must

#### PUT

Update the data already on the server.

- body - must

#### DELETE

Delete data from the server.

- body - no

> HTTP has 2 versions: HTTP/1.1 HTTP/1.0

> In the browser - we can see in developer tools (network) the requests and the response data.

# Status codes

- **1xx - informational** request received / processing.
- **2xx - success** request successfully received / accepted.
- **3xx - redirect** further action must be taken, or redirection.
- **4xx - Client error** request does not have what is needs.
- **5xx - Internal server error** server failed to use the request.

#### Common status codes:

- 200 OK
- 201 OK created
- 301 Moved to new URL
- 400 Bad request
- 401 Unauthorized
- 404 Not found
- 500 Internal server error
