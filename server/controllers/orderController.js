import Order from '../models/order.js'

export const saveOrder = async(req, res) => {
    const order = req.body
    console.log('order',order)
    try {
        const newOrder = new Order(order)

        const result = await newOrder.save()
        res.status(200).json(result)
        console.log('result',result)
        
    } catch (err) {
        console.log(err)
    }
} 