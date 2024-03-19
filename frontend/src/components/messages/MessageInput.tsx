/** @format */

import { useRef, useState } from "react";
import { Textarea } from "../ui/textarea";
import { EmojiPicker } from "../ui/emoji-picker";
const MessageInput = () => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div className="p-2 flex gap-2 items-center">
      <Textarea autoComplete="off" name="message" placeholder="Aa" className="w-full border rounded-full flex items-center h-[20px] resize-none overflow-hidden bg-background"></Textarea>
      <EmojiPicker
        onChange={value => {
          setMessage(message + value);
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      />
    </div>
  );
};

export default MessageInput;
