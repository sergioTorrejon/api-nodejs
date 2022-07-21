import { User } from './entity/user';

export const _getUsers = async () => {
    const users = await User.find();
    return users
/*     try {
      const users = await User.find();
      return res.json(users);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    } */
  };



export const _getUser = async (id) => {

    const user = await User.findOneBy({ id: parseInt(id) });
    return user
/*     try {
      const { id } = req.params;
      const user = await User.findOneBy({ id: parseInt(id) });
  
      if (!user) return res.status(404).json({ message: "User not found" });
  
      return res.json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    } */
};