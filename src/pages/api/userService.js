// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import user from "./json/usersData.json";

export default function handler(req, res) {
  res.status(200).json(user.users);
}
