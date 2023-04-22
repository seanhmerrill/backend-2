const houses = require('./db.json')

module.exports = {
    getAllHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body

        const newHouse = {
            address,
            price,
            imageURL,
        }

        houses.push(newHouse)
        res.status(200).send(houses)
    },
    updateHouse: (req, res) => {
        const {type} = req.body
        const {id} = req.params

        const index = houses.findIndex(e => e.id === +id)

        if(type === 'minus' && houses[index].price > 0){
            houses[index].price -= 100;
            res.status(200).send(houses);
        }
        else{
            houses[index].price +=100;
            res.status(200).send(houses);
        }
    },
    deleteHouse: (req, res) => {
        const {identification} = req.body
        const {index} = houses.findIndex(e => e.id === +identification)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
}