import Image from "next/image";
import avatar from "../../public/avatar.jpeg";
import { configOwner } from "../config/owner";

export const AuthorAvatar = () => {
  return (
    <Image
      width={200}
      height={200}
      className="h-20 w-20 rounded-full"
      src={avatar}
      alt={`${configOwner.name} avatar`}
    />
  );
};
