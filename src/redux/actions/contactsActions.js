import {ADDCONTACT,DELETECONTACT,FILTERCONTACT,UPDATECONTACT,CHANGEALERT,RESETSELECTED,ADDTOSELECTED,CHANGECONTACT,GETCONTACTS} from '../constants';
import { v4 as uuidv4 } from 'uuid';


export const addContact=(contact)=>{
  return{
    type: ADDCONTACT,
    payload: {...contact, id:uuidv4(),update:false}
  }
};

export const deleteContact=(id)=>{
  return{
    type:DELETECONTACT,
    payload:id
  }
}

export const updateContact=(id)=>{
  return{
    type:UPDATECONTACT,
    payload:id
  }
}

export const filterContacts=(value)=>{
  return{
    type:FILTERCONTACT,
    payload:value
  }
}

export const changeAlert=()=>{
  return{
    type:CHANGEALERT
  }
}

export const resetSelected=()=>{
  return{
    type:RESETSELECTED
  }
}

export const addToSelected=(id)=>{
  return{
    type:ADDTOSELECTED,
    payload:id
  }
}

export const changeContact=(contact)=>{
  return{
    type:CHANGECONTACT,
    payload:contact
  }
}

export const getContacts=()=>{
  return{
    type:GETCONTACTS
  }
}

