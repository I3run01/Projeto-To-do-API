import { Model, DataTypes} from 'sequelize'
import { sequelize } from '../instaces/SQL'

export interface tasksInstance extends Model {
    id: number
    name: string
    status: string
    resume: string
}

export const Tasks = sequelize.define<tasksInstance>('Tasks', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    resume: {
        type: DataTypes.STRING
    },
    
}, {
    tableName: 'tasks',
    timestamps: false
})