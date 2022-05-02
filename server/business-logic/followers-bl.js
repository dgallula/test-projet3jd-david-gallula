 import followersDal from "../data-access-layer/followers-dal.js";

const getAll = () => {
  return followersDal.getAll();
};


const updatefollowers = (id, followers) => {
  return followersDal.update(id, followers);
};



const getFollowersById = id => {
    let followers = followersDal.getAll()
    let requestedFollowers = followers.find(followers => followers.id === id)

    return requestedFollowers ?? {}
}

export default {
    getAll,
    getFollowersById,
    updatefollowers,
  };