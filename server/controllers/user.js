const users = require("../models/user");

class Users {
    static async readAll(req, res, next) {

      const currentUser = req.currentUser;
      let usersAll = await users.find();
      if (!usersAll.length) {
        next({
          code: 404,
          message: "user not found"
        });
      } else {
        usersAll = usersAll.filter(item => !item.is_deleted);
        res.status(200).json({
          message: "success getting all user",
          usersAll,
          currentUser : currentUser
        });
      }
    }
  
    static async readById(req, res, next) {
      const { _id } = req.params;
      const user = await users.findOne(_id);
      if (!user || user.is_deleted) {
        next({
          code: 404,
          message: "user not found"
        });
      } else {
        res.status(200).json({
          message: "success geting user",
          user
        });
      }
    }
  
    static async updateUser(req, res, next) {
      const { _id } = req.params;
      const { nama } = req.body;
      const user = await users.findOne(_id);
      if (!user) {
        next({
          code: 404,
          message: "user not found"
        });
      } else if (!nama) {
        next({
          code: 415,
          message: "please fill nama"
        });
      } else {
        user.nama = nama || user.nama;
        user.save();
  
        res.status(200).json({
          message: "success update nama",
          user
        });
      }
    }
    
    static destroyUser = async (req, res, next) => {
      let { _id } = req.params;
      try {
        let user = await users.findOne(_id);
        users.remove();
        res.status(200).json({
          message: "deleted success"
        });
      } catch (error) {
        next(error);
      }
    };
  }
  
  module.exports = Users;

