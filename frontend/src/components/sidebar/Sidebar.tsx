/** @format */

import { LuSearch } from "react-icons/lu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Input placeholder="Search User" />
        <Button className="rounded-full" variant="outline">
          <LuSearch />
        </Button>
      </div>
      <Separator className="mt-3" orientation="horizontal" />
      <Conversations />
    </div>
  );
};

export default Sidebar;
