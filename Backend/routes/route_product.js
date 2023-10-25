const router = require('express').Router();
const {checkToken, checkAdmin, checkIdentity} = require('../middleware-auth/checkToken');
const Product = require('../models/Product');

// CREATE PRODUCT
router.post('/', checkToken, checkAdmin, async (req, res) => {
    // encrypt password if exist
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);

    } catch (error) {
        res.status(500).json(error);       
    }
});

// UPDATE PRODUCT - Admin only
router.put('/:id', checkToken, checkAdmin, async (req, res) => {
    
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { $set : req.body },
            { new : true }
        );
        res.status(200).json({...updatedProduct._doc, message:"update sucessful"});

    } catch (error) {
        res.status(500).json(error);       
    }
});

// DELETE PRODUCT - Admin Only

router.delete('/:id', checkToken, checkAdmin, async (req, res) => {
    
   try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({...savedProduct, message:"product deleted"});

    } catch (error) {
        res.status(500).json(error);       
    }
});

// GET ONE PRODUCT - PUBLIC

router.get('/:id', async (req, res) => {
    
   try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json(error);       
    }
});

// GET ALL PRODUCTS - PUBLIC
router.get('/', async (req, res) => {

    const qCategory = req.query.category;
    let products;

    try {

        if (qCategory) {
            products = await Product.find({
                categories : { $in : [qCategory]}
            })

        } else {
            products = await Product.find();
        }

        res.status(200).json(products);

    } catch (error) {
        res.status(500).json(error);       
    }
});

module.exports = router;