const express = require('express')
const app = express()


const PORT = process.env.PORT || 3000


const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Sabin Niya',
        'birthLoacation': 'London, England'
    },
    'chance the rapper': {
        'age': 28,
        'birthName': 'Siman Tresh',
        'birthLoacation': 'Montreal, USA'
    },
    'dylan': {
        'age': 32,
        'birthName': 'Didnj Junir',
        'birthLoacation': 'Illinois, USA'
    },
    'super': {
        'age': 25,
        'birthName': 'Bilarf refi',
        'birthLoacation': 'Collorado, USA'
    }
}


// visit the main route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName/:rapperAge?', (req, res) => {

    // '/api/:rapa/:gen?'
    // let data = {
    //     'query': {
    //         'rapa': req.params.rapa.toLowerCase() || 'all,
    //         'gen': req.params.gen.toLowerCase() || 12
    //     }
    // }

    // grab the route parameter
    const rapperName = req.params.rapperName.toLowerCase(); 



    (rappers[rapperName]) ?  res.json(rappers[rapperName]) : res.json(rappers['super']) ;


})

app.listen(PORT, () => {
    console.log(`Server is live`)
})