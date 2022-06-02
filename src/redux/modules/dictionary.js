import { doc, collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

// Actions
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";
const UPDATE = "dictionary/UPDATE";
const DELETE = "dictionary/DELETE";

const initialState = {
  list: [
    // { id: "1", word: "단어1", desc: "설명1", example: "예시1" },
    // { id: "2", word: "단어2", desc: "설명2", example: "예시2" },
    // { id: "3", word: "단어3", desc: "설명3", example: "예시3" },
  ],
};

// Action Creators
export function loadDictionary(dict_list) {
  return { type: LOAD, dict_list };
}
export function createDictionary(dict) {
  return { type: CREATE, dict};
}
export function deleteDictionary(dict_index) {
  return { type: DELETE, dict_index };
}
export function updateDictionary(dict_index) {
  return { type: UPDATE, dict_index };
}


//미들웨어즈
export const loadDictionaryFB = () => {
  return async function (dispatch) {
    const dict_data = await getDocs(collection(db, "dictionary"));
    // 배열로 바궈줌
        let dict_list = [];
        dict_data.forEach((doc) => {
            dict_list.push({ id: doc.id, ...doc.data() });
        })
        dispatch(loadDictionary(dict_list));
    }
}

export function createDictionaryFB(dict) {
  return async function (dispatch) {
      const docRef = await addDoc(collection(db, "dictionary"), dict);
      const _dict = await getDoc(docRef);
      const dict_data = { id: _dict.id, ..._dict.data()};
      dispatch(createDictionary(dict_data));
  }
}

export function updateDictionaryFB(dict_id) {
  return async function (dispatch, getState) {
      const docRef = doc(db, "dictionary", dict_id);
      await updateDoc(docRef, {completed: true });
      const _dict_list = getState().dict.list;
      const new_dict = _dict_list.findIndex((d) => {
        return d.id === dict_id;
      })  
      dispatch(updateDictionary(new_dict));
  };
};

export const deleteDictionaryFB = (dict_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "dictionary", dict_id);
    await deleteDoc(docRef);

     const _dict_list = getState().dict.list;
     const dict_index = _dict_list.findIndex((d) => {
       return d.id === dict_id;
     });

     dispatch(deleteDictionary(dict_index));
  }
}

// Reducer 
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/LOAD": {
      if (action.dict_list.length > 0) {
        return { list: action.dict_list };
      }
      return state;
    }
    case 'dictionary/CREATE': {
      const new_list = [...state.list, action.dict];
      return { list: new_list };
    }
    case "dictionary/DELETE": {
      const new_list = state.list.filter((l, idx) => {
        return parseInt(action.dict_index) !== idx;
      });

      return { list: new_list };
    }

    case "dictionary/UPDATE": {    
      const new_dict_list = state.list.map((l, idx) => {
          if (parseInt(action.dict_index) === idx) {
              return { ...l, completed: true };
          }else{
              return l;
          } 
      });
      return {list: new_dict_list};
      }

// do reducer stuff
default: 
    return state;
}
}
