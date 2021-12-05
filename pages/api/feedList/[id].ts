import type { NextApiRequest, NextApiResponse } from "next";
import type { IProfile, IFeedList } from "../../../types";
import Profile from "../../../data/feeds";
export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id,type },
    method,
  } = req;
  console.log(req.query);
  switch (method) {
    case "GET":
      const MAX = 10;
      const TEST_NUMBER = 14;
      const dummy = new Array(TEST_NUMBER).fill(Profile);
      const feedList: IProfile[] = dummy.map((item, key) => ({
        ...item,
        profileIdx: key + 1,
      }));
      const page = Number(req.query.id);
      let result = [];
      console.log(req.query.id);
      if(req.query.type==="all"){
         result = feedList.slice(0, page * MAX);
      }else{
        result = feedList.slice((page * MAX)- MAX, page * MAX);
        console.log("확인",(page * MAX) - MAX, page * MAX);
        if(result.length==0){
          res.status(404).end();
          break;          
        }
      }
      res.status(200).json(result);
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
