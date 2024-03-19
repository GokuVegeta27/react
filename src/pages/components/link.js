import Link from "next/link";

export const MenuLink = ({ text, Icon, href }) => {
  return (
    <Link
      href={href}
      className="p-2 flex flex-col items-center justify-center gap-1 text-center"
    >
      <Icon className="w-8 h-8 text-primary-600" />
      {text}
    </Link>
  );
};

export const MainMenu = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="w-full lg:max-w-fit py-2.5 lg:px-6 flex gap-4 items-center justify-center lg:hover:bg-primary-200 lg:hover:rounded-3xl "
    >
      {text}
    </Link>
  );
};
