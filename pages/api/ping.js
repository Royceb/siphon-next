import nextConnect from "next-connect";
import middleware from "../../middlewares/middleware";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  return res.send(req.query);
});

export default handler;
