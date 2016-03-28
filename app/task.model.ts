console.log("task page success");
export class Task {
  public done: boolean = false;
  // public timeStamp: any = 'null'
  constructor(public description: string, public id: number) {
  }
}
