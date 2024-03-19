/** @format */

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type MessageProps = {
  position: "left" | "right";
};

const Message = ({ position }: MessageProps) => {
  const messageClass = position === "right" ? "justify-end" : "justify-start";
  const avatarOrderClass = position === "right" ? "order-last" : "order-first"; // Menggunakan order-last untuk memindahkan avatar ke posisi terakhir saat posisi adalah "right"

  return (
    <div className={`flex m-2 ${messageClass}`}>
      <div className="flex gap-3 items-center">
        <Avatar className={`${avatarOrderClass}`}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className={`Message text-sm bg-secondary rounded-md p-2`}>Hi Whats Up</div>
          <span className={`flex text-muted-foreground text-xs ${messageClass}`}>Delivered</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
