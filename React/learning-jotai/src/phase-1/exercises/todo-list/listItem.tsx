type Status = "completed" | "in progress" | "not done";
class ListItem {
  public itemText: string;
  public status: Status;

  constructor(itemText: string, status: Status) {
    this.itemText = itemText;
    this.status = status;
  }
}
