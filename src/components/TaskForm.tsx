'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Task, TasksAction } from '@/types/task';
import { useRouter } from 'next/navigation';

export function TaskForm({
  task,
  dispatch,
}: {
  task?: Task;
  dispatch: React.Dispatch<TasksAction>;
}) {
  const [text, setText] = useState(task?.text || '');
  const [done, setDone] = useState(task?.done || false);
  const router = useRouter();

  useEffect(() => {
    if (task) {
      setText(task.text);
      setDone(task.done);
    }
  }, [task]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!text.trim()) return;

    if (task) {
      dispatch({ type: 'changed', task: { ...task, text, done } });
    } else {
      dispatch({ type: 'added', id: Date.now(), text });
    }

    router.push('/tarefas');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="text">Descrição da tarefa</Label>
        <Input
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {task && (
        <div className="flex items-center gap-2">
          <Checkbox
            id="done"
            checked={done}
            onCheckedChange={(checked) => setDone(Boolean(checked))}
          />
          <Label htmlFor="done">Concluída?</Label>
        </div>
      )}

      <Button type="submit">{task ? 'Atualizar' : 'Adicionar'}</Button>
    </form>
  );
}
