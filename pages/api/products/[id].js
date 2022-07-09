import dbConnect from "../../../utilities/mongo"
import Product from "../../../models/Product"

export default async function handler(req, res) {
    const {method, 
        query:{id},
        cookies,
    } = req;

    const token = cookies.token

    dbConnect()

    if(method === "GET"){
        try {
            const products = await Product.findById(id);
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err) 
        }
    }
    if(method === "PUT"){
    if(!token || token !== process.env.TOKEN){
        return res.status(401).json("Not Authorized")
    }
        try{
            const product = await Product.findByIdAndUpdate(id,req.body, {
                new:true,
            });
            res.status(201).json(product)
        }catch(err){
            res.status(500).json(err);
        }
    }
    if(method === "DELETE"){
    if(!token || token !== process.env.TOKEN){
        return res.status(401).json("Not Authorized")
    }
        try{
            await Product.findByIdAndDelete(id);
            res.status(201).json("The Product has been deleted")
        }catch(err){
            res.status(500).json(err);
        }
    }
        
  }