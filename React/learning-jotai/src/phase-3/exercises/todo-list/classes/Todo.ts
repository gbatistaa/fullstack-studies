class Todos {
  public name;
  public category;
  public isCompleted;
  public id: number;

  constructor(
    id: number,
    name?: string,
    category?: string,
    isCompleted?: boolean,
  ) {
    this.name = name ? name : "none";
    this.category = category ? category : "none";
    this.isCompleted = isCompleted ? isCompleted : false;
    this.id = id;
  }
}

export default Todos;
