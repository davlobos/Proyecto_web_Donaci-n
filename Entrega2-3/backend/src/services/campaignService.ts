import Campaign from '../models/campaign';

export const getAllCampaigns = async () => {
  try {
    return await Campaign.find();
  } catch (error) {
    throw new Error('Error al obtener campañas');
  }
};

export const createCampaign = async (campaignData: any) => {
  try {
    const campaign = new Campaign(campaignData);
    return await campaign.save();
  } catch (error) {
    throw new Error('Error al crear campaña');
  }
};

export const updateCampaign = async (id: string, updateData: any) => {
  try {
    return await Campaign.findByIdAndUpdate(id, updateData, { new: true });
  } catch (error) {
    throw new Error('Error al actualizar campaña');
  }
};

export const deleteCampaign = async (id: string) => {
  try {
    return await Campaign.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error al eliminar campaña');
  }
};
