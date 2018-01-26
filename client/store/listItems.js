import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
export const GET_LIST_ITEMS = 'GET_LIST_ITEMS' // GET
export const CREATE_LIST_ITEM = 'CREATE_LIST_ITEM' // POST
export const EDIT_LIST_ITEM = 'EDIT_LIST_ITEM' // PUT
export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM' // DELETE

/**
 * ACTION CREATORS
 */
export const getListItems = listItems => ({type: GET_LIST_ITEMS, listItems})
export const createListItem = listItem => ({type: CREATE_LIST_ITEM, listItem})
export const editListItem = listItem => ({type: EDIT_LIST_ITEM, listItem})
export const deleteListItem = id => ({type: DELETE_LIST_ITEM, id})

/**
 * THUNK CREATORS
 */
export const fetchListItems = () =>
  dispatch =>
    axios.get('/api/list-items')
      .then(res => res.data)
      .then(listItems => {
        const action = getListItems(listItems);
        dispatch(action);
      })
      .catch(err => console.log(err))

export const postListItem = (formData) =>
  dispatch =>
    axios.post('/api/list-items', formData)
      .then(res => res.data)
      .then(listItem => {
        const action = createListItem(listItem);
        dispatch(action);
      })
      .catch(err => console.log(err))

export const putListItem = (id, formData) =>
  dispatch =>
    axios.put(`/api/list-items/${id}`, formData)
      .then(res => res.data)
      .then(listItem => {
        const action = editListItem(listItem);
        dispatch(action);
      })
      .catch(err => console.log(err))

export const destroyListItem = (id) =>
  dispatch =>
    axios.delete(`/api/list-items/${id}`)
      .then(() => {
        const action = deleteListItem(id);
        dispatch(action);
      })
      .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {

    case GET_LIST_ITEMS:
      return action.listItems

    case CREATE_LIST_ITEM:
      return [...state, action.listItem]

    case EDIT_LIST_ITEM: {
      const itemToEdit = state.find(listItem => listItem.id === action.listItem.id);
      const indexOfItemToEdit = state.indexOf(itemToEdit);
      let newState = [...state];
      newState.splice(indexOfItemToEdit, 1, action.listItem);
      return newState;
    }

    case DELETE_LIST_ITEM: {
      const itemToDelete = state.find(listItem => listItem.id === action.id);
      const indexOfItemToDelete = state.indexOf(itemToDelete);
      let newState = [...state];
      newState.splice(indexOfItemToDelete, 1);
      return newState;
    }

    default:
      return state
  }
}
