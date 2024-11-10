class Product {
  public id: number;
  public name: string;
  public price: number;
  public quantity: number;

  constructor(name?: string, price?: number, quantity?: number, id?: number) {
    this.id = id ? id : 0;
    this.name = name ? name : "";
    this.price = price ? price : 0;
    this.quantity = quantity ? quantity : 0;
  }
}

export default Product;
