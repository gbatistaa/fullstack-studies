class Todo {
  public name;
  public category;
  public isCompleted;

  constructor(name?: string, category?: string, isCompleted?: boolean) {
    this.name = name ? name : "";
    this.category = category ? category : "";
    this.isCompleted = isCompleted ? isCompleted : false;
  }
}

export default Todo;
