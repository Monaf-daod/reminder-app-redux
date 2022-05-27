import React ,{useState} from "react";
import { connect } from 'react-redux';
import { add_Reminder,delete_Reminder, clear_Reminders} from '../actions';
import moment from 'moment'


function App (props) {

    const [reminderText, setReminderText] = useState('')
    const [reminderDate, setReminderDate] = useState(new Date())

    const {list} = props

 
    const listReminders = list.map(item => {
        return (
            <li key={item.id} className='list-group-item'>
                <p>Mission : {item.text}</p>
                <p>Date : {moment(new Date(item.date)).fromNow()}</p>
                <span className="btn btn-danger closeIcon" onClick={() => props.delete_Reminder(item.id)}>&times;</span>
            </li>
        )
    })
     
    return(
        <div className='App'>
            <img src="images/notes.png" width="120" height="180" alt="" />
            <div>
                <h2>What Should You Do ?</h2>
            </div>
            <input onChange={(e) => {setReminderText(e.target.value)}}
                className="form-control" 
                type='text' 
                placeholder="Enter What Do You Think" 
                value={reminderText}
                autoFocus/>
            <input  onChange={(e) => {setReminderDate(e.target.value)}}
                className="form-control" 
                type='datetime-local' 
                value={reminderDate}
             />
            <button onClick={() => 
                {
                    if (reminderText && reminderDate){
                        props.add_Reminder(reminderText, reminderDate)
                        setReminderText('')
                        setReminderDate('')
                    }
                }
            }
                className='btn btn-primary btn-block'>
                Add Reminder
            </button>
            <ul className='list-group'>
                {listReminders}
            </ul>
            <button 
                className='btn btn-danger btn-block' onClick={() => props.clear_Reminders()}>
                Clear Reminders
            </button>
        </div>
    )
}

/**
 * function mapStateToProps(state) {
    
    return{
        list :state
    }
}
 */

/**
 * function mapDispatchToProps(dispatch) {
        return {
            add_Reminder : () => dispatch(add_Reminder())
        }
    }
 */

export default connect(state => {
    return {
        list :state
    }
}, {add_Reminder, delete_Reminder, clear_Reminders})(App);