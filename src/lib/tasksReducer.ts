import { Task, TasksAction } from '@/types/task';

export function tasksReducer(tasks: Task[], action: TasksAction): Task[] {
  switch (action.type) {
    case 'added':
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case 'changed':
      return tasks.map((t) =>
        t.id === action.task.id ? action.task : t
      );
    case 'deleted':
      return tasks.filter((t) => t.id !== action.id);
    default:
      throw new Error('Ação desconhecida: ' + JSON.stringify(action));
  }
}
