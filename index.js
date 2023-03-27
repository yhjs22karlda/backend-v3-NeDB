import Datastore from "nedb-promises"
const db = Datastore.create("database.db")

const people = [
    {
        firstname: "Anders",
        lastname: "Svensson",
        age: 40
    },
    {
        firstname: "Lisa",
        lastname: "Svensson",
        age: 41
    },
    {
        firstname: "Orvar",
        lastname: "Jansson",
        age: 22
    },
    {
        firstname: "Anna",
        lastname: "Larsson",
        age: 33
    },
    {
        firstname: "John",
        lastname: "Smith",
        age: 18
    },
    {
        names: ["Anders", "Orvar"]
    }
]

// db.insert(people)
//     .then(() => console.log("Data inseted!"))
//     .catch(err => console.log(err))

const svenssons = await db.find({lastname: "Svensson"})
console.log("Svenssons:", svenssons)

// const aFirstname = await db.find({firstname: /orvar/i})
// console.log("A firstname:", aFirstname)

// const test = await db.find({}).sort({age: -1}).exec()
// console.log(test)

// const over30 = await db.find({age: {$gt: 30}})
// console.log(over30)

// db.update({firstname: "Anna"}, {$set:{firstname: "Anna-Lena", age: 35}})
    // .then(res => console.log(res))
    // .catch(err => console.log(err))

// db.remove({firstname:"John"})
    // .then(res => console.log(res))

// const namesId = await db.find({names: {$exists: true}})
// console.log(namesId[0]._id)
// db.update({_id:namesId[0]._id}, {$push: {names: "Steffi"}})