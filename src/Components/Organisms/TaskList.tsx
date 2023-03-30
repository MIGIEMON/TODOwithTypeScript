import { useState } from "react";
import { TaskAddForm } from "../Molecules/TaskAddForm";
import { TaskItem } from "../Molecules/TaskItem";

type Task = {
  id: number;
  name: string;
  isCompleted: boolean;
};

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string) => {
    setTasks((prevTasks: Task[]) => [
      ...prevTasks,
      { id: Date.now(), name: taskName, isCompleted: false }
    ]);
  };

  const toggleTaskComplete = (taskId: number) => {
    setTasks((prevTasks: Task[]) =>
      prevTasks.map((task: Task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const updateTaskName = (taskId: number, newTaskName: string) => {
    setTasks((prevTasks: Task[]) =>
      prevTasks.map((task: Task) =>
        task.id === taskId ? { ...task, name: newTaskName } : task
      )
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks: Task[]) =>
      prevTasks.filter((task: Task) => task.id !== taskId)
    );
  };

  return (
    <div>
      <TaskAddForm onAdd={addTask} />
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          taskName={task.name}
          isCompleted={task.isCompleted}
          onToggleComplete={() => toggleTaskComplete(task.id)}
          onUpdateTaskName={(newTaskName) =>
            updateTaskName(task.id, newTaskName)
          }
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </div>
  );
};
