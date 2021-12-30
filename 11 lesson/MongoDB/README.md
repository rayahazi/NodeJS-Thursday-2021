# MongoDB

https://www.mongodb.com/try/download/compass

MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.

## Relational-db vs non-relational db:

#### Relational-db

PostgreSQL, MySql, MS SQL Server, SQLite.
Better for well-structured, constant data.

**Advantages**

- Strict structure. Easy to see the relations.

* less storage space than non-relational db.
* Can handle lots of complex queries, database transactions, and routine analysis of data.

  **Disadvantages**

- All relations and tables options(columns, data types etc..) must be panned well before adding data to db.
- Hard and expensive to change the architecture in the future.

* Cannot store complex or very large images, numbers, designs and multimedia products

#### non-relational-db

Better choice for huge amount of data, dynamic data,

MongoDB, DynamoDB(AWS), Elasticsearch, Redis, firebase

**Advantages**

- the ability to store and process large amounts of unstructured data.
- it can process ANY type of data without needing to modify the architecture.
- creating and maintaining a NoSQL database is faster and cheaper.

* Object-oriented programming that is easy to use and flexible (MongoDB is basically written in javascript)

  **Disadvantages**

- administration of a NoSQL database is more complicated, due to technical knowledge that is required to maintain the db.
- transferring records to strongly typed programming languages becomes a challenge.

## Structure:

Works with JSON objects, instead of tables(rows + columns).

> example table in sql, and how to transfer to JSON:

#### Table `Students` in relational database:

```sql
 id  |    name    |   address               |  courses           | birthdate
-----------------------------------------------------------------------------
5001 | James Hoog | New York, USA,123       | Python, C#, MySql  | 1992, 12, 23
5002 | Nail Knite | Paris, France, 4345     | Python             | 1965, 10, 1
5005 | Pit Alex   | London, England, 5454   | Java, MongoDB      | 1991, 5, 17
5006 | Mc Lyon    | Paris, France, 4345     | Php, FullStack     | 1996, 3, 25
5007 | Paul Adam  | Rome, Italy, 43643      | C#, MySql          | 1973, 2, 14
5003 | Lauson Hen | Jerusalem, Israel, 7464 | Java, Python, C    | 1992, 11, 25
```

# class task

1. convert the data in the table to json objects.
   - name will be an object of two keys: firstName, lastName
   - address will be an object of 3 keys: city, country, street
   - courses will be an array.
   - birthdate will be an object with 3 keys: year, month, day
2. create database in mongoDB `University`, and add the json data you created to a collection named `Students`
