'use client';

import { useReducer } from 'react';
import { tasksReducer } from '@/lib/tasksReducer';
import { TaskList } from '@/components/TaskList';
import { Task } from '@/types/task';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const initialTasks: Task[] = [
  { id: 1, text: 'Estudar React', done: false },
  { id: 2, text: 'Fazer atividade de POS', done: true },
];

export default function ListaDeTarefas() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lista de Tarefas</h1>
        <Link href="/tarefas/nova">
          <Button>Nova Tarefa</Button>
        </Link>
      </div>
      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
}
