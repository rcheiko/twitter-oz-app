import { useEffect, useState } from "react";
import { Settings } from "../types/twitter/Settings";

export default function Home() {
  const [data, setData] = useState<null | Settings>(null);

  useEffect(() => {
    fetch("http://localhost:5000/settings")
      .then((res) => res.json())
      .then((data: Settings) => {
        setData(data);
        console.log("DATA :", data);
        data.
      })
  }, []);

  if (!data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Home</h1>
      {/* <p>{data}</p> */}
    </div>
  );
}
