'use client';

import { Task, TasksAction } from '@/types/task';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

export function TaskList({
  tasks,
  dispatch,
}: {
  tasks: Task[];
  dispatch: React.Dispatch<TasksAction>;
}) {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li key={task.id} className="border p-4 rounded">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Checkbox
                id={`task-${task.id}`}
                checked={task.done}
                onCheckedChange={(checked) =>
                  dispatch({
                    type: 'changed',
                    task: {
                      ...task,
                      done: Boolean(checked),
                    },
                  })
                }
              />
              <label
                htmlFor={`task-${task.id}`}
                className={task.done ? 'line-through' : ''}
              >
                {task.text}
              </label>
            </div>
            <div className="flex gap-2">
              <Link href={`/tarefas/${task.id}`}>
                <Button variant="outline">Editar</Button>
              </Link>
              <Link href={`/tarefas/${task.id}/apagar`}>
                <Button variant="destructive">Excluir</Button>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
