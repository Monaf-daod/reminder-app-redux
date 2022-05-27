
import {ADD_REMINDER,DElETE_REMINDER, CLEAR_REMINDER} from '../types'

import {bake_cookie, read_cookie} from 'sfcookies'  // for save Reminders in  browser's cookies



const reducer = (state = [], action) => {
    state = read_cookie('reminders')
    let reminders = state
    if(action.type === ADD_REMINDER) {
        reminders = [...state, {id:Math.random(), text:action.text, date:action.date}]
        bake_cookie('reminders',reminders) 
        console.log("reminders ", reminders)
        return reminders
    }
    else if(action.type === DElETE_REMINDER){
        reminders = reminders.filter(reminder => action.id !== reminder.id)
        bake_cookie('reminders',reminders) 
        console.log("reminders  ",reminders)
        return reminders
    }
    else if (action.type === CLEAR_REMINDER){
        reminders = []
        bake_cookie('reminders',reminders) 
        console.log("reminders  ",reminders)
        return reminders
    }
    
    return state
}

export default reducer