import { useEffect, useState } from "react";
import { ProfileConnectedType } from "../types/twitter/profileConnected/ProfileConnected";
import { client } from "../apollo/client";
import { GET_PROFILE_CONNECTED } from "../apollo/global/queries";
import { useQuery } from "@apollo/client";




export default function Home() {
  // const [data, setData] = useState<null | Settings>(null);

  const { data: { ProfileConnected } = { } } = useQuery<{ProfileConnected: ProfileConnectedType}>(GET_PROFILE_CONNECTED)
  console.log(ProfileConnected);

  return (
    <div>
      <h1>Home</h1>
      {/* <p>{data}</p> */}
    </div>
  );
}
