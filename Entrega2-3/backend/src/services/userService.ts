import User from '../models/user';

export const getAllUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    throw new Error('Error al obtener usuarios');
  }
};

export const createUser = async (userData: any) => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (error) {
    throw new Error('Error al crear usuario');
  }
};

export const updateUser = async (id: string, updateData: any) => {
  try {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
  } catch (error) {
    throw new Error('Error al actualizar usuario');
  }
};

export const deleteUser = async (id: string) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error al eliminar usuario');
  }
};
