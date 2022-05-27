
import {ADD_REMINDER, DElETE_REMINDER, CLEAR_REMINDER} from '../types'

export const add_Reminder = (text, date) => {
    const action ={
        type:ADD_REMINDER,
        text,
        date
    }
    console.log("add ", action)
    return action
}

export const delete_Reminder = id =>{
    const action ={
        type :DElETE_REMINDER,
        id
    }
    console.log("delete ", action)
    return action
}

export const clear_Reminders = () => {
    const action = {
        type :CLEAR_REMINDER
    }
    console.log("clear reminders", action)
    return action
}