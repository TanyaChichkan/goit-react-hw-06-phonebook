import {ADDCONTACT,DELETECONTACT,FILTERCONTACT,UPDATECONTACT,CHANGEALERT,ADDTOSELECTED, RESETSELECTED,CHANGECONTACT,GETCONTACTS} from '../constants';
import { combineReducers } from 'redux';

const initialArray=[];

const initialState={
  contacts: initialArray,
  alert:false,
  repeatName:"",
  selectedContact:null,
}

const contactsReducer=(state={...initialState},action)=>{
  switch(action.type){

    case ADDCONTACT:
      if(state.contacts.some(contact=>contact.name.toLowerCase() === action.payload.name.toLowerCase())){
        localStorage.setItem('contacts',JSON.stringify([...state.contacts]))
        return {...state,alert:!state.alert,repeatName:action.payload.name};
      } else {
        localStorage.setItem('contacts',JSON.stringify([...state.contacts,action.payload]))
        return {...state,contacts:[...state.contacts,action.payload]};
      }

    case DELETECONTACT:
      localStorage.setItem('contacts', JSON.stringify([...state.contacts.filter(contact=>contact.id !== action.payload)]))
      return {...state,contacts:[...state.contacts.filter(contact=>contact.id !== action.payload)]};

    case UPDATECONTACT:
      return {...state,contacts:[...state.contacts.map(contact=>contact.id===action.payload ?
        {...contact, update: !contact.update} : contact)]}

    case ADDTOSELECTED:
      if(state.contacts.find(contact=>contact.id === action.payload)){
        return {...state,selectedContact:{...state.contacts.find(contact=>contact.id === action.payload)}}
      }
      else {
        return state
      }

    case RESETSELECTED:
      return{...state,selectedContact:null}

    case CHANGEALERT:
      return {...state,alert:!state.alert, repeatName:""}

    case CHANGECONTACT:
      return{...state,contacts:[...state.contacts.map(item=>item.id===action.payload.id ?
        {...item,name:action.payload.name, number: action.payload.number,update:false}:{...item})]}

    case GETCONTACTS:
      if(localStorage.getItem('contacts')){
        const contactsFromStorage = JSON.parse(localStorage.getItem('contacts'));
        return {...state,contacts:[...state.contacts,...contactsFromStorage]}
      } else {
        return state;
      }


    default:
      return state;
  }
};

const filterReducer=(state="",action)=>{
  switch(action.type){
    case FILTERCONTACT:
      return state=action.payload
    default:
      return state;
  }
}

export const phoneBookReducer=combineReducers({
  contactsArr: contactsReducer,
  filterValue: filterReducer,
})


