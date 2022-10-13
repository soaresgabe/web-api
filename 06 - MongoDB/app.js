import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/fruitsDB", { 
    useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please insert a name."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 9
    },
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "I liked."
});

fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Gabe",
    age: 22
})

person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit!"
})

const orange = new Fruit({
    name: "Orange",
    score: 4,
    review: "Kinda eeh"
})

Fruit.insertMany([kiwi, orange], (e) => {
    if(e) {
        console.log(e);
    } else {
        console.log("Sucessfully saved all the fruits to fruitDB.")
    }
});

Fruit.find( (e, fruits) => {
    if(e) {
        console.log(e)
    } else {
        console.log(fruits)
    }
})

Fruit.updateOne(
    {_id: "6347113d32209e12a95a2e62"}, 
    {name: "Coconut"},
    (e) => {
        if(e) console.log(e)
        else console.log("Updated.")
    })
