import TaskLink from "./TaskLink";

type Props = {
  id: number;
  onClick: () => void;
  count: number;
};

const TaskNav = ({ id, onClick, count }: Props) => {
  return (
    <nav className="w-full px-5">
      <ul className="flex h-full text-grey-40">
        <TaskLink to={`?sort=all`} text="All" count={50} />
        <TaskLink to={`?sort=in-progress`} text="In Progress" count={22} />
        <TaskLink to={`?sort=in-review`} text="In Review" count={10} />
        <TaskLink to={`?sort=completed`} text="Completed" count={5} />
        <TaskLink to={`?sort=bugs`} text="Bugs" count={3} />
        <TaskLink to={`?sort=past-due`} text="Past Due" count={1} />
      </ul>
    </nav>
  );
};

export default TaskNav;
