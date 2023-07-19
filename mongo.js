const mongoose = require('mongoose')
const config = require('./utils/config')

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = config.MONGODB_URI;

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note ({
    content: 'Mongoose makes things easy',
    date: new Date(),
    important: true,
})

Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})

test('there are two notes', async () => {
    const response = await.get('/api/notes')

    expect(response.body).toHaveLength(2)
})

test('the first note is about HTTP methods', async () => {
    const response = await api.get('/api/notes')

    expect(response.body[0].content).toBe('HTML is easy')
})
