import { useState } from "react";
import { sendToBackground } from "@plasmohq/messaging";

function IndexPopup() {
  const [data, setData] = useState("");

  return (
    <div
      style={{
        padding: 16,
      }}
    >
      <button
        onClick={async () => {
          const res = await sendToBackground({
            name: "posts",
          });
          setData(res.posts);
        }}
      >
        Get posts
      </button>
      {data.toString()}
    </div>
  );
}

export default IndexPopup;
