class Item {
  public name: string = "";
  public price: number = 0;
  public quantity: number = 0;

  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

export default Item;
