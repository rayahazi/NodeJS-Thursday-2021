# Class task

Create new project `my-app`

- Install express and nodemon
- Allow nodemon to run
- Create basic server app
  - import express
  - create app from express
  - work with port 3000
  - add listener
  - run the app with `npm start`
- Create a file `people.json`, and init it wil empty array.
  > each person will have: id, name, age, favFood
- Add the 4 requests:

1. **GET** - will show all the people from `people.json`, in the path `/all`
   > read from the file
2. **POST** - will add a new person to the file. The client will send the data in the request's body. The path: `/add`
   > read from the file, and write back the new array
3. **PUT** - will update the person's favFood, using the id, in path: `/update/:id`.
   > read from the file, and write back the new array
4. **DELETE** - will delete a person using the id, in path: `/delete/:id`.
   > read from the file, and write back the new array
