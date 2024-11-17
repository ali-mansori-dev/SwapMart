import { useSelector } from "react-redux";
import { useEffect } from "react";

import BasicLayoutMobile from "../../layouts/desktop/basic_layout";
import Supabase from "../../lib/helper/ClientSupabase";
import SideBar from "./side_bar";

const Dashboard = () => {
  const { user_info } = useSelector((redux) => redux.auth);
  useEffect(() => {
    (async function () {
      const { data, error } = await Supabase.rpc("get_full_category_tree");
      console.log(data, error);
    })();
  }, []);

  return (
    <BasicLayoutMobile>
      <div className="flex flex-row gap-4">
        <SideBar />
        <div className="border flex flex-col gap-4 w-3/4 border-gray-300 rounded-md p-4">
          <img
            src={user_info?.user_metadata?.avatar_url}
            onError={(e) =>
              (e.target.src = `https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/person.png`)
            }
            className="w-14 h-w-14 rounded-full"
            alt="avatar_pictures"
          />
          <div>{user_info?.user_metadata?.full_name}</div>
          <div>{user_info?.phone || user_info?.email}</div>
        </div>
      </div>
    </BasicLayoutMobile>
  );
};

export default Dashboard;
