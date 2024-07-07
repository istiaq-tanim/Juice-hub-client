import { useContext } from "react"
import { useGetCartQuery } from "../features/cart/cartApi"
import { UserContext } from "../Provider/AuthProvider"

const useCartCalculation = () => {
      const { user } = useContext(UserContext)
      const { data: cartItems } = useGetCartQuery(user?.email)
      let cartCalculation = cartItems?.reduce((previousItem, item) => {
            const { price, orderQuantity } = item
            previousItem.totalAmount += parseFloat(price) * orderQuantity
            previousItem.totalQuantity += orderQuantity

            return previousItem

      }, {
            totalAmount: 0,
            totalQuantity: 0
      })
      return {
            amount: cartCalculation?.totalAmount,
            quantity: cartCalculation?.totalQuantity
      }
}

export default useCartCalculation