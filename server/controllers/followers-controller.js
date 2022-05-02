import express from "express";
import followersBl from "../business-logic/followers-bl.js";
import generalSetting from "../common/config.js";
import { checkPassword, checkResultStatus } from "../common/helper.js";




const followersRouter = express.Router();

followersRouter.get(`${generalSetting.baseUrl}/followers`, async (req, res) => {
  const getResult = await followersBl.getAll();
  if (!checkResultStatus(getResult)) {
    return res.status(500).send(getResult);
  } else {
    return res.send(getResult.data);
  }
});



followersRouter.put(`${generalSetting.baseUrl}/followers/:id`, async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updateResult = await followersBl.updatefollower(id, body);
  if (!checkResultStatus(updateResult)) {
    return res.status(500).send(updateResult);
  } else {
    updateResult.data = {
      id,
      ...body,
    };
    return res.send(updateResult.data);
  }
});

export default followersRouter;
