import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await userService.getAllUsers();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error || 'Error al obtener usuarios' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error || 'Error al crear usuario' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedUser = await userService.updateUser(id, req.body);
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error || 'Error al actualizar usuario' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedUser = await userService.deleteUser(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ message: error || 'Error al eliminar usuario' });
  }
};

// Agregar una campaña favorita a un usuario
export const addFavoriteCampaign = async (req: Request, res: Response) => {
  const { userId, campaignId } = req.params;
  try {
    const result = await userService.addFavoriteCampaign(userId, campaignId);
    res.json({ message: result.message }); // Envía el mensaje devuelto por el servicio
  } catch (error) {
    res.status(500).json({ message: error || 'Error al agregar campaña favorita' });
  }
};

export const removeFavoriteCampaign = async (req: Request, res: Response) => {
  const { userId, campaignId } = req.params;
  try {
    const result = await userService.removeFavoriteCampaign(userId, campaignId);
    res.json({ message: result.message });
  } catch (error) {
    res.status(500).json({ message: error || 'Error al quitar campaña favorita' });
  }
};

// Obtener un usuario con sus campañas favoritas
export const getUserWithFavorites = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await userService.getUserWithFavorites(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error || 'Error al obtener usuario con campañas favoritas' });
  }
};