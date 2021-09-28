
import { getSession } from "next-auth/client";
import User from "../../../models/User";
import dbConnect from "../../../lib/mongodb";

export default async function getUsers(req, res) {
  const user = await getSession({ req });
  await dbConnect();

  if (user) {
    const users = await User.find({ user: user.id }).lean();
    return res.json({ users });
  } else res.json({ error: "Not logged in" });
};