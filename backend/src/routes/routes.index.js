import {Router} from "express";
const routes = Router();
import { createUser, findOneUser, findUser, indexUser, removeOneUser, updateOneUser } from "../controllers/controllers.js";

//index
routes.get('/', indexUser);

//Create user
routes.post('/users',createUser);

//Get all users
routes.get('/users',findUser);

//Get one user
routes.get('/users/:id',findOneUser);

//Update one user
routes.put('/users/:id',updateOneUser);

//remove one user
routes.delete('/users/:id',removeOneUser);

export default routes;