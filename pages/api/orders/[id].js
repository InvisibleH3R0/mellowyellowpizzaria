import dbConnect from "../../../utilities/mongo"
import Order from "../../../models/Orders"

const handler = async (req, res) => {
const {method, 
    query:{id},
} = req;

await dbConnect()

 if(method === "GET"){
    try {
        const order = await Order.findById(id)
        res.status(200).json(order)
    } catch (err) {
        res.status(500).json(err)   
    }
 }
 if(method === "PUT"){
    try{
        const order = await Order.findByIdAndUpdate(id,req.body, {
            new: true,
        })
        res.status(201).json(order)
    }catch(err){
        res.status(500).json(err)
    }
 }
 if(method === "DELETE"){
    if(!token || token !== process.env.TOKEN){
        return res.status(401).json("Not Authorized")
    }
        try{
            await Order.findByIdAndDelete(id);
            res.status(201).json("The Order has been cancelled!")
        }catch(err){
            res.status(500).json(err);
        }
    }
        
  }

export default handler