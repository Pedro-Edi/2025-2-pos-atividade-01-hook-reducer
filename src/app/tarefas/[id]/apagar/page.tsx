'use client';

import { useParams, useRouter } from 'next/navigation';
import { useReducer } from 'react';
import { tasksReducer } from '@/lib/tasksReducer';
import { Task } from '@/types/task';
import { DeleteTask } from '@/components/DeleteTask';

const initialTasks: Task[] = [
  { id: 1, text: 'Estudar React', done: false },
  { id: 2, text: 'Fazer atividade de POS', done: true },
];

export default function ApagarTarefaPage() {
  const params = useParams();
  const router = useRouter();
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const id = Number(params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) return <p className="p-6">Tarefa não encontrada.</p>;

  function handleCancel() {
    router.push('/tarefas');
  }

  function handleDeleted() {
    router.push('/tarefas');
  }

  return (
    <DeleteTask
      task={task}
      dispatch={dispatch}
      onCancel={handleCancel}
      onDeleted={handleDeleted}
    />
  );
}
