const router = require('express').Router();
const {checkToken, checkAdmin, checkIdentity} = require('../middleware-auth/checkToken');
const Cart = require('../models/Cart');

// CREATE OR UPDATE USER CART 
// :id => user ID
router.post('/:id', checkToken, checkIdentity, async (req, res) => {
    
    // check if cart already exist for user
    try {
        const currentCart = await Cart.exists({ userId : req.params.id});
        console.log(currentCart)
        

        // if no cart found => create new one
        if (!currentCart){
            const newCart = new Cart(req.body);
            const savedCart = await newCart.save();
            res.status(200).json(savedCart);

        } else {
            // update user's current cart

            const updatedCart = await Cart.findOneAndUpdate(
                {userId : req.params.id},
                { $set : req.body },
                { new : true }
            );
            console.log('update successful:')
            res.status(200).json({...updatedCart._doc, message:"update sucessful"});
        }

    } catch (error) {
        res.status(500).json(error);       
    }

});

// GET CART BY USER ID
router.get('/find/:id', checkToken, checkIdentity, async (req, res) => {
    
   try {
        const Carts = await Cart.find({ userId : req.params.id});
        res.status(200).json(Carts);

    } catch (error) {
        res.status(500).json(error);       
    }
});

// DELETE by CART ID
router.delete('/:id', checkToken, checkIdentity, async (req, res) => {
    
    try {
         const deletedCart = await Cart.findByIdAndDelete(req.params.id);
         res.status(200).json(deletedCart);
 
     } catch (error) {
         res.status(500).json(error);       
     }
 });

// GET ALL  BY ADMIN
router.get('/', checkToken, checkAdmin, async (req, res) => {

    try {  
        const carts = await Cart.find();
        
        res.status(200).json(carts);

    } catch (error) {
        res.status(500).json(error);       
    }
});

module.exports = router;