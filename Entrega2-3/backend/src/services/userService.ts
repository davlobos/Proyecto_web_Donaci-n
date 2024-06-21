import User from '../models/user';
import Campaign from '../models/campaign';
import mongoose from 'mongoose';

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


export const addFavoriteCampaign = async (userId: string, campaignId: string) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      throw new Error('Campaña no encontrada');
    }

    const campaignObjectId = new mongoose.Types.ObjectId(campaignId);

    // Verificar si campaignObjectId ya está en favoriteCampaigns
    if (!user.favoriteCampaigns.some(c => c.equals(campaignObjectId))) {
      user.favoriteCampaigns.push(campaignObjectId);
      await user.save();
      return { message: 'Campaña agregada a favoritos' };
    } else {
      return { message: 'La campaña ya está en favoritos' };
    }
  } catch (error) {
    throw new Error(`Error al agregar campaña favorita: ${campaignId}`);
  }
};

// Función para quitar una campaña de favoritos de un usuario
export const removeFavoriteCampaign = async (userId: string, campaignId: string) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const campaignObjectId = new mongoose.Types.ObjectId(campaignId);

    if (!user.favoriteCampaigns.some(c => c.equals(campaignObjectId))) {
      return { message: 'Campaña no se encontraba en favoritos' };
    }

    // Filtrar el array favoriteCampaigns para remover campaignId si existe
    user.favoriteCampaigns = user.favoriteCampaigns.filter(c => !c.equals(campaignObjectId));
    await user.save();

    return { message: 'Campaña quitada de favoritos' };
  } catch (error) {
    throw new Error(`Error al quitar campaña favorita: ${campaignId}`);
  }
};

// Obtener un usuario con sus campañas favoritas
export const getUserWithFavorites = async (userId: string) => {
  try {
    const user = await User.findById(userId).populate('favoriteCampaigns');
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    return user;
  } catch (error) {
    throw new Error(`Error al obtener usuario con campañas favoritas: ${userId}`);
  }
};