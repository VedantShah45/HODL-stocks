import axios from 'axios'
import { StockModel } from '../models/tradeModel.js';

export const getTrades = async(req,res)=>{
    try {
        const data=await axios.get('https://api.wazirx.com/api/v2/tickers');
        let trades=data.data
        trades=Object.entries(trades)
        trades=trades.slice(0,10)
        await StockModel.deleteMany({})
        //Retrieving data
         for(let i=0;i<10;i++){
             const {name,last,buy,sell,volume,base_unit}=trades[i][1]
             await StockModel.create({
                name,last,buy,sell,volume,base_unit
             })
         }
        const stocks=await StockModel.find({})
        res.json({
            success:true,
            data:stocks
        })
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}



