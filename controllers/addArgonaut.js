const handleAdd = (db) => (req, res) => {
	const {name} = req.body
	if (!name || (name.length>100)) {
		return res.status(400).json("Argonaut name can't be empty or too long (<100 characters)");
	} 

	db.insert({ name : name })
	.into('argonauts')
	.returning('id')
	.then(id => res.json(id))
	.catch(err => res.status(400).json("couldn't add the argonaut to database"))	
}

module.exports = {
	handleAdd
}