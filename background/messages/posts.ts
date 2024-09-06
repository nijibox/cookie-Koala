import type { PlasmoMessaging } from "@plasmohq/messaging";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const posts = await fetch(
    "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=d99282d065a99276&id=J001215879&format=json"
  )
    .then((res) => res.text())
    .then((text) => JSON.parse(text));
  res.send({
    posts: JSON.stringify(posts),
  });
};

export default handler;
