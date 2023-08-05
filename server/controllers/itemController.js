import Item from "../models/item.js"

export const getItems =  async(req, res)=> {
    try {
        const items = await Item.find()
        res.status(200).json(items)
        console.log(items)
    } catch (err) {
        console.log(err)
    }
}