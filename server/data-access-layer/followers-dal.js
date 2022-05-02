import connection from "../common/database.js";
 
let result = {
  success: false,
  data: null,
};

const getAll = async () => {
  try {
    let resultFromDB = await connection.promise().query("SELECT * FROM followers");
    result.success = true;
    result.data = resultFromDB[0];
  } catch (error) {
    result.data = error;
  }
  return result;
};

const getFollowersById = async () => {
  try {
    let resultUser = await connection.promise().query(`SELECT * FROM followers
                    WHERE count(followers)=1`);
    result.success = true;
    result.data = resultUser[0];
  } catch (error) {
    result.success = false;
    result.data = error;
  }
  return result;
};



const update = async (id, followers) => {
  try {
    const updatefollowersResult = await connection.promise().query(
      `UPDATE followers SET userId=?, vacationid=?, followers=?
      WHERE id = ${id}`,
      [followers.userid, followers.vacationsid, followers.followers]
    );
    result.success = true;
    result.data = updatefollowersResult[0];
  } catch (error) {
    result.data = error;
  }
  return result;
};

export default {
  getAll,
  getFollowersById,
  update,
};
