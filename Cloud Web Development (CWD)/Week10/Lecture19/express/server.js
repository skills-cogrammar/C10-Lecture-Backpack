import express from "express";

const app = express();
app.use(express.json())

const PORT = process.env.PORT | 8000

const todos = [
    {
        id: 1,
        title: "Buy milk",
        completed: false
    },
    {
        id: 2,
        title: "Buy eggs",
        completed: false
    },
    {
        id: 3,
        title: "Buy bread",
        completed: false
    }
]

app.get("/todo", (req, res) => {
    const { id, completed, title } = req.query;
    console.log(completed)

    const output =  todos
            .filter((todo) =>  id == undefined || todo.id == id)
            .filter((todo) => completed == undefined || todo.completed == completed)
            .filter((todo) => title == undefined || todo.title == title)

    res.status(200).send(output)
})

// app.get("/todo/:id", (req, res) => {
//     const { id } = req.params;

//     const output = todos.filter((todo) => todo.id == id);

//     res.status(200).send(output)
// })

app.post("/todo", (req, res) => {
    const { completed, title } = req.body;
    console.log(req.body)

    const id = todos.length;

    todos.push({
        id,
        completed,
        title
    })

    res.status(203).send({
        id
    })
})


app.listen(PORT, function() {
    console.log(`Running on: http://localhost:${PORT}`)
});