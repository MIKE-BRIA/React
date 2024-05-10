import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h1>
          Hello, <b className="uppercase">{session?.user?.name}</b>
        </h1>
        <div className="flex bg-gray-200 text-black gap-1 p-1  rounded-r-lg">
          <img src={session?.user?.image} alt="" className="w-6 h-6" />
          <span className="capitalize">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
