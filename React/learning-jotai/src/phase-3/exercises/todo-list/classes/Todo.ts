class Todo {
  public name: string = "";
  public category: string = "";
  public isCompleted: boolean = false;

  constructor(name: string, category: string, isCompleted: boolean) {
    this.name = name;
    this.category = category;
    this.isCompleted = isCompleted;
  }
}

export default Todo;
