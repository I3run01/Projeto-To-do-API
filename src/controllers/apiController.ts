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