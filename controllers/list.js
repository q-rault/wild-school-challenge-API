const handleList = (req, res, db) => {
	db.select('name').from('argonauts')
	.then(argonauts => {
		const argonautNames = argonauts.map(argonaut => argonaut.name)
		return res.json(argonautNames);
	})
	.catch(err => res.status(400).json('unable to get the argonauts list'))
}

module.exports = {
	handleList
}