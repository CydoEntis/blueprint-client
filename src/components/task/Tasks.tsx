import React from "react";
import TaskCategory from "@/components/task/TaskCategory";
import TaskCard from "@/components/task/TaskCard";
import ActionButton from "../buttons/ActionButton";
import TaskActions from "./TaskActions";

const Tasks = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:overflow-auto lg:pb-5">
      <TaskCategory title="New" iconColor="blue" count={6}>
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <ActionButton
          className="w-full rounded-md bg-white p-3 text-gray-60 drop-shadow-lg"
          onClick={() => console.log("View All New Taks")}
        >
          View All
        </ActionButton>
      </TaskCategory>

      <TaskCategory title="In Progress" iconColor="yellow" count={6}>
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <ActionButton
          className="w-full rounded-md bg-white p-3 text-gray-60 drop-shadow-lg"
          onClick={() => console.log("View All New Taks")}
        >
          View All
        </ActionButton>
      </TaskCategory>
      <TaskCategory title="Complete" iconColor="green" count={6}>
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />

        <ActionButton
          className="w-full rounded-md bg-white p-3 text-gray-60 drop-shadow-lg"
          onClick={() => console.log("View All New Taks")}
        >
          View All
        </ActionButton>
      </TaskCategory>
      <TaskCategory title="Bugs" iconColor="orange" count={6}>
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <ActionButton
          className="w-full rounded-md bg-white p-3 text-gray-60 drop-shadow-lg"
          onClick={() => console.log("View All New Taks")}
        >
          View All
        </ActionButton>
      </TaskCategory>
      <TaskCategory title="Incomplete" iconColor="red" count={6}>
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <TaskCard
          title="Test 1"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus ex, reprehenderit nostrum dolore magni"
        />
        <ActionButton
          className="w-full rounded-md bg-white p-3 text-gray-60 drop-shadow-lg"
          onClick={() => console.log("View All New Taks")}
        >
          View All
        </ActionButton>
      </TaskCategory>
    </section>
  );
};

export default Tasks;
