interface SubtaskProps {
  subtask: string;
}

const Subtask = function ({ subtask }: SubtaskProps) {
  return <div className="text-sm">{subtask.slice(2)}</div>;
};

export default Subtask;
