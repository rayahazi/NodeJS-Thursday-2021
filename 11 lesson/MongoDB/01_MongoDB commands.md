# MongoDB commands

### Run mongoDB from CMD:

- go to `C:\Program Files\MongoDB\Server\5.0\bin`

* Open CMD in that path
* In cmd: `mongo.exe`

#### Show all databases:

```
> show dbs
University  0.000GB
admin       0.000GB
blog        0.000GB
config      0.000GB
local       0.000GB
```

#### Show current DB:

```
> db
test
```

#### Create or switch database:

```
> use University
switched to db University
```

#### Drop database (function)

```
> db.dropDatabase()
{ "dropped" : "University", "ok" : 1 }
```

#### Create a collection:

```
> db.createCollection('Students')
{ "ok" : 1 }
```

#### Show all the collections in current DB

```
> show collections
Students
```

#### Insert row:

insert() - gets one object:

```
> db.Students.insert({
    name:'John',
    age: 26,
    course: ['NodeJS', 'Angular', 'React'],
    address: {
        city:'Jerusalem',
        country:'Israel'
    },
    dateEntered: Date()
})

WriteResult({ "nInserted" : 1 })
```

#### Insert multipe rows:

insertMany() - gets array of objects:

```
> db.Students.insertMany([
    {
        name:'Alice',
        age:24,
        course: ['NodeJS', 'Angular', 'Python']
    },
    {
        name:'Moshe',
        age:40,
        course: ['NodeJS', 'React-native', 'Python']
    },
    {
        name:'Bracha',
        age:18,
        course: ['NodeJS', 'C#']
    },
])

{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("60acfb2ee859731cf1faa711"),
                ObjectId("60acfb2ee859731cf1faa712"),
                ObjectId("60acfb2ee859731cf1faa713")
        ]
}
```

#### Get all rows in a collection

```
> db.Students.find()

{ "_id" : ObjectId("60acfa80e859731cf1faa710"), "name" : "John", "age" : 26, "course" : [ "NodeJS", "Angular", "React" ], "address" : { "city" : "Jerusalem", "country" : "Israel" }, "dateEntered" : "Tue May 25 2021 16:24:16 GMT+0300 (Jerusalem Daylight Time)" }
{ "_id" : ObjectId("60acfb2ee859731cf1faa711"), "name" : "Alice", "age" : 24, "course" : [ "NodeJS", "Angular", "Python" ] }
{ "_id" : ObjectId("60acfb2ee859731cf1faa712"), "name" : "Moshe", "age" : 40, "course" : [ "NodeJS", "React-native", "Python" ] }
{ "_id" : ObjectId("60acfb2ee859731cf1faa713"), "name" : "Bracha", "age" : 18, "course" : [ "NodeJS", "C#" ] }
```

#### Get all rows formatted:

```
> db.Students.find().pretty()

{
        "_id" : ObjectId("60acfa80e859731cf1faa710"),
        "name" : "John",
        "age" : 26,
        "course" : [
                "NodeJS",
                "Angular",
                "React"
        ],
        "address" : {
                "city" : "Jerusalem",
                "country" : "Israel"
        },
        "dateEntered" : "Tue May 25 2021 16:24:16 GMT+0300 (Jerusalem Daylight Time)"
}
{
        "_id" : ObjectId("60acfb2ee859731cf1faa711"),
        "name" : "Alice",
        "age" : 24,
        "course" : [
                "NodeJS",
                "Angular",
                "Python"
        ]
}
{
        "_id" : ObjectId("60acfb2ee859731cf1faa712"),
        "name" : "Moshe",
        "age" : 40,
        "course" : [
                "NodeJS",
                "React-native",
                "Python"
        ]
}
{
        "_id" : ObjectId("60acfb2ee859731cf1faa713"),
        "name" : "Bracha",
        "age" : 18,
        "course" : [
                "NodeJS",
                "C#"
        ]
}
```

#### Find specific rows:

```
> db.Students.find({name:'Alice'})

{ "_id" : ObjectId("60acfb2ee859731cf1faa711"), "name" : "Alice", "age" : 24, "course" : [ "NodeJS", "Angular", "Python" ] }

> db.Students.find({age:24})
```

#### Sort rows:

```
# Ascending:
db.Students.find().sort({ age: 1 }).pretty()

# Descending
db.Students.find().sort({ age: -1 }).pretty()

```

```
> db.Students.find().sort({ age: 1 }).pretty()
{
        "_id" : ObjectId("60acfb2ee859731cf1faa713"),
        "name" : "Bracha",
        "age" : 18,
        "course" : [
                "NodeJS",
                "C#"
        ]
}
{
        "_id" : ObjectId("60acfb2ee859731cf1faa711"),
        "name" : "Alice",
        "age" : 24,
        "course" : [
                "NodeJS",
                "Angular",
                "Python"
        ]
}
{
        "_id" : ObjectId("60acfa80e859731cf1faa710"),
        "name" : "John",
        "age" : 26,
        "course" : [
                "NodeJS",
                "Angular",
                "React"
        ],
        "address" : {
                "city" : "Jerusalem",
                "country" : "Israel"
        },
        "dateEntered" : "Tue May 25 2021 16:24:16 GMT+0300 (Jerusalem Daylight Time)"
}
{
        "_id" : ObjectId("60acfb2ee859731cf1faa712"),
        "name" : "Moshe",
        "age" : 40,
        "course" : [
                "NodeJS",
                "React-native",
                "Python"
        ]
}
```

#### Count rows:

```
> db.Students.find().count()
4

> db.Students.find({ age: 18 }).count()
1
```

#### Limit rows:

```
> db.Students.find().limit(2).pretty()

{
        "_id" : ObjectId("60acfa80e859731cf1faa710"),
        "name" : "John",
        "age" : 26,
        "course" : [
                "NodeJS",
                "Angular",
                "React"
        ],
        "address" : {
                "city" : "Jerusalem",
                "country" : "Israel"
        },
        "dateEntered" : "Tue May 25 2021 16:24:16 GMT+0300 (Jerusalem Daylight Time)"
}
{
        "_id" : ObjectId("60acfb2ee859731cf1faa711"),
        "name" : "Alice",
        "age" : 24,
        "course" : [
                "NodeJS",
                "Angular",
                "Python"
        ]
}
```

#### Chaining:

```
> db.Students.find().limit(2).sort({ name: 1 }).pretty()
{
        "_id" : ObjectId("60acfb2ee859731cf1faa711"),
        "name" : "Alice",
        "age" : 24,
        "course" : [
                "NodeJS",
                "Angular",
                "Python"
        ]
}
{
        "_id" : ObjectId("60acfb2ee859731cf1faa713"),
        "name" : "Bracha",
        "age" : 18,
        "course" : [
                "NodeJS",
                "C#"
        ]
}
```

#### Foreach

```
db.Students.find().forEach(student =>
print(`User: ${student.name}.  Courses: ${student.course}`)
)

User: John. Courses: NodeJS,Angular,React
User: Alice. Courses: NodeJS,Angular,Python
User: Moshe. Courses: NodeJS,React-native,Python
User: Bracha. Courses: NodeJS,C#
```

#### find one row:

```
> db.Students.findOne({ age: 18 })

{
        "_id" : ObjectId("60acfb2ee859731cf1faa713"),
        "name" : "Bracha",
        "age" : 18,
        "course" : [
                "NodeJS",
                "C#"
        ]
}
```

#### update row

```
db.Students.update({ name: 'Alice' },
{
    name: 'Alice in wonderland',
    age: 37
},
{
    upsert: true
})

WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

#### Update specific field:

```
db.Students.update({ name: 'John' },
{
    $set: {
        address: {
            city:'Tel-aviv',
            country:'Israel'
        }
    }
})

WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

#### Increment field ($inc)

```
db.Students.update({ name: 'Moshe' },
{
    $inc: {
        age: 1
    }
})

WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

#### Rename field (Keys):

```
> db.Students.update({ name: 'Bracha' },
... {
...     $rename: {
...         course: 'Lesson'
...     }
... })
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.Students.find({name:'Bracha'}).pretty()
{
        "_id" : ObjectId("60acfb2ee859731cf1faa713"),
        "name" : "Bracha",
        "age" : 18,
        "Lesson" : [
                "NodeJS",
                "C#"
        ]
}
```

#### Delete a row:

```
> db.Students.remove({ name:'Moshe' })

WriteResult({ "nRemoved" : 1 })
```

#### Greater & less than:

- gt- greater than
- gte- greater than or equal
- lt- less than
- lte- less than or equal
- eq - equal
- ne - not equal

```
db.Students.find({ age: { $gt: 40 } })
db.Students.find({ age: { $gte: 40 } })
db.Students.find({ age: { $lt: 40 } })
db.Students.find({ age: { $lte: 40 } })
db.Students.find({ age: { $eq: 40 } })
db.Students.find({ age: { $ne: 40 } })

```
