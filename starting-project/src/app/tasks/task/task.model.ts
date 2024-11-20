export interface ITask {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface INewTask {
  title: string;
  summary: string;
  date: string;
}
