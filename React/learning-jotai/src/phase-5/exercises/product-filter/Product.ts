import { Category } from "./ProductFilter";

export class Product {
  public id: number;
  public name: string;
  public category: Category;
  public price: number;

  constructor(name?: string, price?: number, category?: Category, id?: number) {
    this.id = id ? id : 0;
    this.name = name ? name : "";
    this.category = category ? category : "all";
    this.price = price ? price : 0;
  }
}
