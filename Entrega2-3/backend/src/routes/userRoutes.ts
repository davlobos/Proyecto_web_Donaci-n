import { Router } from 'express';
import * as userController from '../controllers/userController';

const router = Router();

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


router.post('/:userId/favorite/:campaignId', userController.addFavoriteCampaign);
router.delete('/:userId/favorite/:campaignId', userController.removeFavoriteCampaign); 
router.get('/:userId/favorites', userController.getUserWithFavorites);

export default router;
