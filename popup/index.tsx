import { useState } from "react"
import { sendToBackground } from "@plasmohq/messaging"

function IndexPopup() {
  const [data, setData] = useState("")
  const [error, setError] = useState(null);
  const [test, setTest] = useState<string | null>(null);
  // const fetchData = async () => {
  //   try {
  //     // const response = await fetch("http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=d99282d065a99276&id=J001215879")
  //     // const result = await response.json();
  //     // setData(result);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }
  return (
    <div
      style={{
        padding: 16
      }}>
        {error && <div>{error}</div>}
        <button
        onClick={async () => {
          const res = await sendToBackground({
            name: "posts"
          })
          setData(res.posts)
        }}>
        Get posts
      </button>
      <button onClick={() => setTest("ffeeg")}>TTTTTT</button>
      {data.toString()}
      <p>{test}</p>
      <input type="text" />
    </div>
  )
}

export default IndexPopup
