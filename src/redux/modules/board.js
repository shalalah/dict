// import { doc, collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
// import { db } from "../../firebase";

// Actions
const LOAD = 'board/LOAD';
const CREATE = 'board/CREATE';
const UPDATE = 'board/UPDATE';
const DELETE = 'board/DELETE';

const initialState = {
    list: [

    ],};

// Action Creators
export function loadBoard(bord_list) {
return { type: LOAD, bord_list };
}

export function createBoard(board) {
return { type: CREATE, board };
}

export function updateBoard(board_index) {
return { type: UPDATE, board_index };
}

export function deleteBoard(board_index) {
return { type: DELETE, board_index};
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getWidget () {
return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
}