interface CartItem {
  name: string,
  price: number,
  qty: number
}

interface CartAPI {
  length: number,
  total: number,
  addItem(item: CartItem): CartAPI,
  add(name: string, price: number, qty: number): CartAPI
}

type CartItemsReducer = (acc: number, curr: CartItem) => number

const itemsLengthReducer: CartItemsReducer = (acc, curr) => acc + curr.qty

const itemsTotalReducer: CartItemsReducer = (acc, curr) => acc + curr.price * curr.qty

export function cashier(): CartAPI {
  const items: CartItem[] = []

  return {
    get length(): number {
      return items.reduce(itemsLengthReducer, 0)
    },
    get total(): number {
      return items.reduce(itemsTotalReducer, 0)
    },
    addItem(item) {
      items.push(item)
      return this
    },
    add(name, price, qty = 1) {
      return this.addItem({ name, price, qty })
    }
  }
}
