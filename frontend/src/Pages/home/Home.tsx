/** @format */

import MessageContainer from "@/components/messages/MessageContainer";
import Sidebar from "@/components/sidebar/Sidebar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <div>
      <Card className=" p-3 gap-3 flex sm:h-[450px] md:h-[550px]">
        <Sidebar />
        <Separator orientation="vertical" />
        <MessageContainer />
      </Card>
    </div>
  );
};

export default Home;
