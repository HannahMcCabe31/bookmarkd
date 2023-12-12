import * as apiRequests from './model.js';

// This file controls the api request, then repackages it for the router to send back

export async function getAllUsers(req, res) {
  console.log(`getAllUsers() in controllers.js has been called`);
  const users = await apiRequests.getAllUsers();

  res.status(200).json({
    success: true,
    payload: users,
    // check this later
  });
}

export async function getSpecificUser(req, res) {
    console.log(`getSpecificUser was called looking for user with id ${req.query["user_id"]}`)
    const desiredUserId = req.query["user_id"]
    const user = await apiRequests.getSpecificUser(desiredUserId)

    res.status(200).json({
        success: true,
        payload: user,
    });
}