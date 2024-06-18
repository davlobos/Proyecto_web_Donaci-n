import { Request, Response } from 'express';
import * as campaignService from '../services/campaignService';

export const getCampaigns = async (req: Request, res: Response) => {
  try {
    const campaign = await campaignService.getAllCampaigns();
    console.log(campaign);
    
    res.json(campaign);
  } catch (error) {
    res.status(500).json({ message: error || 'Error al obtener campañas' });
  }
};

export const createCampaign = async (req: Request, res: Response) => {
  try {
    const newCampaign = await campaignService.createCampaign(req.body);
    res.status(201).json(newCampaign);
  } catch (error) {
    res.status(400).json({ message: error || 'Error al crear campaña' });
  }
};

export const updateCampaign = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedCampaign = await campaignService.updateCampaign(id, req.body);
    if (!updatedCampaign) {
      return res.status(404).json({ message: 'Campaña no encontrada' });
    }
    res.json(updatedCampaign);
  } catch (error) {
    res.status(400).json({ message: error || 'Error al actualizar campaña' });
  }
};

export const deleteCampaign = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedCampaign = await campaignService.deleteCampaign(id);
    if (!deletedCampaign) {
      return res.status(404).json({ message: 'Campaña no encontrada' });
    }
    res.json({ message: 'Campaña eliminada' });
  } catch (error) {
    res.status(500).json({ message: error || 'Error al eliminar campaña' });
  }
};
