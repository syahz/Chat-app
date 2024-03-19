/** @format */

import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        <div className="bg-primary-foreground rounded-sm px-4 py-2 mb-2">
          <span>To: </span>
          <span>John Doe</span>
        </div>
        <Messages />
        <MessageInput />
      </>
    </div>
  );
};

export default MessageContainer;
