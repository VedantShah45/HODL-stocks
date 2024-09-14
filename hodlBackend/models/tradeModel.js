import mongoose from 'mongoose'

const StockSchema =mongoose.Schema(
    {
        name:String,
        last:Number,
        buy:Number,
        sell:Number,
        volume:Number,
        base_unit:String
    }
)

export const StockModel=mongoose.model('stocks',StockSchema)