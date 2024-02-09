const { helperService } = require("../Helper/helper");
const User = require("../Models/user.model");

class UserService {
  async signup(req) {
    try {
      const { username, password } = req.body;
      const hashPassword = await helperService.encryptPassword(password);
      const user = new User({
        username: username,
        password: hashPassword,
      });
      await user.save();
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async login(req) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (
        user &&
        (await helperService.comparePassword(password, user.password))
      ) {
        return user;
      }
      return false;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserService;
