import { useState } from "react";
import { Checkbox } from "../Atoms/Checkbox";
import { Button } from "../Atoms/Button";
import { Input } from "../Atoms/Input";

type TaskItemProps = {
  taskName: string;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onUpdateTaskName: (newTaskName: string) => void;
  onDelete: () => void;
};

export const TaskItem: React.FC<TaskItemProps> = ({
  taskName,
  isCompleted,
  onToggleComplete,
  onUpdateTaskName,
  onDelete
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(taskName);

  const handleSave = () => {
    onUpdateTaskName(editedTaskName);
    setIsEditing(false);
  };

  return (
    <div>
      <Checkbox checked={isCompleted} onChange={onToggleComplete} />
      {isEditing ? (
        <>
          <Input value={editedTaskName} onChange={setEditedTaskName} />
          <Button action="add" onClick={handleSave}>
            Save
          </Button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: isCompleted ? "line-through" : "none" }}
          >
            {editedTaskName}
          </span>
          <Button action="edit" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        </>
      )}
      <Button action="delete" onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};
