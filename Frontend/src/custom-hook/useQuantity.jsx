
import React, { useContext, useState } from 'react'


const useQuantity = () => {
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (action_type) => { 
        switch (action_type) {
            case 'Plus':
                // debugger;
                setQuantity(quantity+1);
                break;
            case 'Minus':
                quantity>1 && setQuantity(quantity-1);
                break;
        }
     }

  return {quantity, setQuantity, handleQuantity}
}

export default useQuantity;