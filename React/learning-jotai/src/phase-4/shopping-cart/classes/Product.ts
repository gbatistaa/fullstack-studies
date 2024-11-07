class Product {
  public id: number;
  public name: string;
  public price: number;
  public quantity: number;

  constructor(id: number, name?: string, price?: number, quantity?: number) {
    this.id = id;
    this.name = name ? name : "";
    this.price = price ? price : 0;
    this.quantity = quantity ? quantity : 0;
  }
}

export default Product;
