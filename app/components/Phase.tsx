import Task from "./Task";

interface PhaseProps {
  phase: {
    phase: string;
    color: string;
    tasks: [{ task: ""; subtasks: [string] }];
  };
}

const Phase = function ({ phase }: PhaseProps) {
  return (
    <div className=" min-w-[275px] relative flex flex-col gap-4">
      <div className="w-full py-2 px-2 bg-gray100 flex items-center justify-center relative min-h-[60px] border">
        <div
          className={`absolute w-[275px] -left-[1px] -top-[1px] z-50 h-[4px] bg-secondaryPurple  `}
        ></div>
        <p className="text-center text-[13px] tracking-[0.5px] text-gray900">
          {phase.phase.slice(2).toUpperCase()}
          <span className="text-gray700"> ({phase.tasks.length})</span>
        </p>
      </div>
      {phase.tasks.map((task) => (
        <Task
          key={Math.random() * 300}
          task={task.task}
          subtasks={task.subtasks}
        />
      ))}
    </div>
  );
};

export default Phase;
