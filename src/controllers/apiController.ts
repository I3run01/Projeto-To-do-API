import {Request, Response} from 'express'
import sequelize, { Sequelize } from 'sequelize';
import { Op, where } from "sequelize";

import { Tasks } from '../models/tasks';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true})
}

export const random = (req: Request, res: Response) => {
    let nRand: number = Math.floor( Math.random()*10)
    res.json({number: nRand})
}

export const name = (req: Request, res: Response) => {
    let name: string = req.params.name
    res.json({name: 'You send the name ' + name})
}

export const getAllTasks = async (req: Request, res: Response) => {

    let tasks = await Tasks.findAll()
    res.json({tasks})
}


export const GetOneTask = async (req: Request, res: Response) => {

    let id: number = Number(req.params.id)

    let task = await Tasks.findByPk(id)

    if (task) res.json(task)
    else res.json({error: 'Not found'})
    
}

export const tasksdone =async (req: Request, res: Response) => {
    let list = await Tasks.findAll({where: {status: 'done'}})

    res.json(list)
}

export const tasksnotdone =async (req: Request, res: Response) => {
    let list = await Tasks.findAll({where: {status: 'not done'}})

    res.json(list)
}

export const postTask =async (req: Request, res: Response) => {
    let name = req.body.name
    let resume = req.body.resume

    await Tasks.create({
        name: name,
        resume: resume
    })

    res.json({message: 'Task created'})
}

export const taskdone =async (req: Request, res: Response) => {
    let {id} = req.params

    await Tasks.update({status: 'done'}, {
        where: {id: id}
    })

    res.json({message: `id: ${id} updated`})
}

export const tasknotdone =async (req: Request, res: Response) => {
    let {id} = req.params

    await Tasks.update({status: 'not done'}, {
        where: {id: id}
    })

    res.json({message: `id: ${id} updated`})
}

export const taskname =async (req: Request, res: Response) => {
    let {id} = req.params

    let name = req.body.name

    await Tasks.update({name: name}, {
        where: {id: id}
    })

    res.json({message: `task name changed to ${name}`})
}

export const taskresume =async (req: Request, res: Response) => {
    let {id} = req.params
    let resume = req.body.resume

    await Tasks.update({resume: resume}, {
        where: {id: id}
    })

    res.json({message: `message chenged to ${resume}`})
}

export const task =async (req: Request, res: Response) => {
    let {id} = req.params

    await Tasks.destroy({id:id})
}