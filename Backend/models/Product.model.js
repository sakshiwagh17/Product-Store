import mongoose from 'mongoose';

const ProductSchema = await mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    {
        TimeStramps: true,
    }
)

const Product = mongoose.model('Product', ProductSchema);
//Product because as mongoose convert it in products
export default Product