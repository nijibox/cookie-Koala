import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch("http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=d99282d065a99276&id=J001215879")
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div
      style={{
        padding: 16
      }}>
        {error && <div>{error}</div>}
      <button onClick={fetchData}>ボタン</button>
      {data.toString()}
    </div>
  )
}

export default IndexPopup
