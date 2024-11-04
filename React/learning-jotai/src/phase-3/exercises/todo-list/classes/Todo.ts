class Todo {
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
    this.name = name ? name : "";
    this.category = category ? category : "";
    this.isCompleted = isCompleted ? isCompleted : false;
    this.id = id;
  }
}

export default Todo;
