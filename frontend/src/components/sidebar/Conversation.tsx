/** @format */

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-primary-foreground m-3 p-2 py-1 cursor-pointer rounded-sm">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" width={6} height={6} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-sm font-medium">John Doe</div>
      </div>
    </>
  );
};

export default Conversation;
