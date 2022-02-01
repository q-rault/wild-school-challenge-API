const handleList = (req, res, db) => {
	db.select('*').from('argonauts')
	.then(table => {
		return res.json(table);
	})
	.catch(err => res.status(400).json('unable to get the argonauts list'))
}

module.exports = {
	handleList
}