import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

import { removeTask } from "../serverActions";
import { Task } from "../types";

type Props = {
  task: Task;
};

const CrossIcon = ({ onClick }: { onClick: () => void }) => (
  <svg
    className="h-5 w-5 cursor-pointer shadow-md"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="red"
    onClick={onClick}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const TaskBrick = ({ task }: Props) => {
  const router = useRouter();

  const handleRemoveTask = () => {
    removeTask(task.id);
    toast.success("🗑 Task removed successfully");
    router.refresh();
  };

  return (
    <div
      className="rounded text-sm"
      title={task.title}
      style={{
        height: "20px",
        backgroundColor: task.background,
      }}
    >
      <div className="flex justify-between">
        <span
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {task.title}
        </span>
        <CrossIcon onClick={handleRemoveTask} />
      </div>
    </div>
  );
};

export default TaskBrick;
