'use client';

import { useReducer } from 'react';
import { TaskForm } from '@/components/TaskForm';
import { tasksReducer } from '@/lib/tasksReducer';

export default function NovaTarefaPage() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Nova Tarefa</h1>
      <TaskForm dispatch={dispatch} />
    </div>
  );
}
