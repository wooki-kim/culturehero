import type { NextApiRequest, NextApiResponse } from "next";
import type { IProfile } from "../../../types";
import Profile from "../../../data/feeds";
export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;
  switch (method) {
    case "GET":
      // Get data from your database
      const dummy = new Array(100).fill(Profile);
      const feedList: IProfile[] = dummy.map((item, key) => ({
        ...item,
        profileIdx: key + 1,
      }));
      const id = Number(req.query.id);
      const result = feedList.filter((item) => item.profileIdx == id);
      if(result.length==0) res.status(404).end();
      res.status(200).json(result.pop());
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
