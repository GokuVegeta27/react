import { cn } from "./cn";

export const Button = ({ text, icon, onclick, condition, className = "" }) => {
  return (
    <button
      type="button"
      onClick={onclick}
      className={cn(
        `py-2 px-4 inline-flex gap-4 items-center justify-center rounded-lg border border-primary-500 shadow-lg hover:scale-110`,
        { "border-x-4 border-solid": condition },
        className
      )}
    >
      {icon}
      {text}
    </button>
  );
};

export const BorderlessButton = ({ text, icon }) => {
  return (
    <button className="max-w-fit py-2.5 px-6 flex gap-4 items-center justify-center hover:bg-primary-200 hover:rounded-3xl">
      {icon}
      {text}
    </button>
  );
};
