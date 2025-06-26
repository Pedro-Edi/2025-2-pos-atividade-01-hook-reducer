'use client';

import { useParams } from 'next/navigation';
import { useReducer } from 'react';
import { tasksReducer } from '@/lib/tasksReducer';
import { TaskForm } from '@/components/TaskForm';
import { Task } from '@/types/task';

const initialTasks: Task[] = [
  { id: 1, text: 'Estudar React', done: false },
  { id: 2, text: 'Fazer atividade de POS', done: true },
];

export default function EditarTarefaPage() {
  const params = useParams();
  const id = Number(params.id);
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const task = tasks.find((t) => t.id === id);

  if (!task) return <p className="p-6">Tarefa não encontrada.</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Editar Tarefa</h1>
      <TaskForm task={task} dispatch={dispatch} />
    </div>
  );
}
