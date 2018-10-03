type Name = string
type Price = number
type Qty = number

interface CartItem {
  name: Name,
  price: Price,
  qty: Qty
}

type CartItemsReducer = (acc: number, curr: CartItem) => number

const itemsLengthReducer: CartItemsReducer = (acc, curr) => acc + curr.qty

const itemsTotalReducer: CartItemsReducer = (acc, curr) => acc + curr.price * curr.qty

class CartAPI {
  items: CartItem[] = []

  get length(): number {
    return this.items.reduce(itemsLengthReducer, 0)
  }

  get total(): number {
    return this.items.reduce(itemsTotalReducer, 0)
  }

  addItem(item: CartItem): CartAPI {
    this.items.push(item)
    return this
  }

  add(name: string, price: number, qty: number = 1): CartAPI {
    return this.addItem({ name, price, qty })
  }
}

export function cashier(): CartAPI {
  return new CartAPI();
}
