import express from 'express'
const app = express()

app.get('*', (req, res) => {
	const text = '[status] server under maintenance.\ndeveloped by andrew setyawan <ands>'
	res.send(text)
})

// listen server
app.listen(5000, () => {
	console.log('server is running')
})
