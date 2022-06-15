import { Router } from "express";
import * as ApiController from '../controllers/apiController'

const router = Router()

router.get('/ping', ApiController.ping)
router.get('/random', ApiController.random)
router.get('/name/:name', ApiController.name)

router.get('/tasks', ApiController.getAllTasks)
router.get('/tasksdone', ApiController.tasksdone)
router.get('/tasksnotdone', ApiController.tasksnotdone)
router.post('/task', ApiController.postTask)

router.get('/task/:id', ApiController.GetOneTask)
router.put('/taskdone/:id', ApiController.taskdone)
router.put('/tasknotdone/:id', ApiController.tasknotdone)
router.put('/taskname/:id', ApiController.taskname)
router.put('/taskresume/:id', ApiController.taskresume)
router.delete('/task/:id', ApiController.task)

export default router