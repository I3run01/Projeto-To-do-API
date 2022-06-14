import { Router } from "express";
import * as ApiController from '../controllers/apiController'

const router = Router()

router.get('/ping', ApiController.ping)
router.get('/random', ApiController.random)
router.get('/name/:name', ApiController.name)

router.get('/tasks', ApiController.getAllTasks)

router.get('/task/:id', ApiController.GetOneTask)

export default router