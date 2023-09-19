import express from 'express'

const app = express()

app.get('/', (req, res) => {
	res.send("faucet byseltr.domain!")
})

// listen server
app.listen(5000, () => {
	console.log('server is running')
})