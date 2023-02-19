import { Router } from 'express';
import { addPost, deletePost, getAllPosts, getPostById, updatePost } from '../controllers/postController.js';

const postRouter = Router();

postRouter.get('/', getAllPosts);
postRouter.post('/', addPost);
postRouter.get('/:id', getPostById);
postRouter.put('/:id', updatePost);
postRouter.delete('/:id', deletePost);

export default postRouter;
