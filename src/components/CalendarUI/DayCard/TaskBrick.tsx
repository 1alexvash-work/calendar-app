import React from "react";

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
  return (
    <span
      className="rounded inline-block"
      title={task.title}
      style={{
        height: "20px",
        width: "50px",
        backgroundColor: task.background,
      }}
    >
      <div className="flex justify-end">
        <CrossIcon onClick={() => alert("Deletion")} />
      </div>
    </span>
  );
};

export default TaskBrick;
