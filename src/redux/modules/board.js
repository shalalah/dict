import { doc, collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
// import { addDoc, collection, getDocs, getDoc } from 'firebase/firestore';
import {db} from "../../shared/firebase";

// Actions
const LOAD = 'board/LOAD';
const CREATE = 'board/CREATE';
const UPDATE = 'board/UPDATE';
const DELETE = 'board/DELETE';

const initialState = { list: [
    {title: "test", content: "test", img: "test", image_url: "test"}
], };

// Action Creators
export function loadBoard(board_list) {
    return { type: LOAD, board_list };
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

//미들웨어즈
// 파이어베이스랑 통신하는 부분
//메인(보여주기)
export const loadBoardFB = () => {
    return async function (dispatch) {
// //       // 데이터를 가져와요!
      const board_data = await getDocs(collection(db, "board"));
      console.log(board_data);
      let board_list  = [];
  
// // //       // 하나씩 우리가 쓸 수 있는 배열 데이터로 만들어줍시다!
      board_data.forEach((doc) => {
// //         // 콘솔로 확인해요!
        // console.log(doc.id, doc.data());
        board_list.push({ id: doc.id, ...doc.data() });
      });
// // //           // 잘 만들어졌는 지 리스트도 확인해봐요! :)
    console.log(board_list);
    dispatch(loadBoard(board_list));
  }
}
//생성(write page)
export function createBoardFB(board) {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "board"), board);
        // console.log(docRef);
        const _dict = await getDoc(docRef);
        const dict_data = { id: _dict.id, ..._dict.data()};
        dispatch(createBoard(dict_data));
    }
}
//
export const updateBoardFB = (board_list, board_list_id) => {
        return async function (dispatch, getState) {
            const docRef = doc (db, "board", board_list_id);
            console.log(docRef);
            // await updateDoc(docRef, {
            //     comment : board_list.comment,
            //     image_url : board_list.image_url,
            // });
            // const new_board_list = getState().board_list.list;
            // const board_list_index = new_board_list.findIndex((l) => {
            //     return l.id === board_list_id;
            // })
            // dispatch(updateBoard(board_list, board_list_index))
        }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'board/LOAD' : {
            return {list: action.board_list}
        }
        case 'board/CREATE': {
            const new_list = [...state.list, action.board];
            return { list: new_list };
        }
        // case 'board/UPDATE' :{
        //     const _new_board_list = state.board_list.map((a, idx) =>
        //     parseInt(action.board_list_index) === idx ? {...a, ...action.board_list} : a);
        //     return { ...state, board_list: _new_board_list};
        // }       
      // do reducer stuff
    default: 
        return state;
    }
}

