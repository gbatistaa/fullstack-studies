class Item {
  public name: string;
  public price: number;
  public quantity: number;

  constructor(name?: string, price?: number, quantity?: number) {
    this.name = name || "Unnamed";
    this.price = price || 0;
    this.quantity = quantity || 0;
  }
}

export default Item;
