import { GoCheckCircleFill } from "react-icons/go";
import Image from "next/image";
import { cn } from "./cn";

const Task = ({ task, description, list, src, icon, hidden }) => {
  return (
    <>
      <div
        className={cn(
          "p-4 grid lg:grid-cols-2 gap-2 bg-primary-100 rounded-lg",
          { hidden: hidden }
        )}
      >
        <div className="p-6 space-y-4 font-medium ">
          <h2 className="flex gap-4 items-center justify-center lg:justify-start font-medium text-2xl ">
            <div className="max-w-fit p-2.5 rounded-full bg-primary-200 ">
              {icon}
            </div>
            {task} Based Tasks
          </h2>
          <p className="text-md">{description} </p>
          <ul className="flex flex-col gap-4 text-md">
            {list.map((task, index) => (
              <li key={index} className="items-center inline-flex gap-4">
                <GoCheckCircleFill className="text-primary-600" />
                {task}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6">
          <Image
            className="w-full rounded-xl"
            src={src}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
};

export default Task;
