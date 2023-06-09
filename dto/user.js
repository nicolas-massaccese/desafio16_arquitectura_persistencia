const getDao = require("../dao");

const mapUser = (user) => ({
    name: user.name,
    lastname: user.lastname,
    nickname: `${user.name} ${user.lastname}`,
});

const getUserById = async (id) => {
    const dao = await getDao();
    const user = await dao.getUserById(id);
    return mapUser(user);
};


const getAllUsers = async () => {
    const dao = await getDao();
    const users = await dao.getAllUsers(id);
    return users.map(mapUser);
};

const addSingleUser = async (user) => {
    const dao = await getDao();

    dao.addSingleUser({
        ...user,
        createdAt: new Date(),
    });
    return mapUser(user);
};



module.exports = { getUserById, getAllUsers, addSingleUser }