// 회원가입
// 아이디, 닉네임, 비밀번호, 비밀번호 확인, 회원가입 버튼

import React from "react";
import { useNavigate} from "react-router-dom";
import styled from 'styled-components';
import {auth, db} from "../shared/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {collection, addDoc} from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();

  const id_ref = React.useRef();
  const name_ref = React.useRef();
  const pw_ref = React.useRef();

    // 회원가입
    const signupFB = async() => {
      // 값 확인 -> 밸리데이션
        // if (id_ref.current.value === ""){
        //     return false;
        // }

      const user = await createUserWithEmailAndPassword(
          auth,
          id_ref.current.value,
          pw_ref.current.value 
          );
          console.log(user);

      // 데이터 추가
      const user_doc = await addDoc(collection(db, "users"),
          {user_id: id_ref.current.value, 
          name: name_ref.current.value,});
      console.log(user_doc.id);
      navigate(-1);
  };
  
    
  return (
    <ContentBox>
    <Content>
    <ContentTitle>회원가입 화면</ContentTitle>
    <button onClick={() => {
                    navigate(-1);
                }}>홈으로</button>
    </Content>
      <div>
        아이디 : <input ref={id_ref} /> <br />
        닉네임 : <input ref={name_ref} /> <br />
        비밀번호 : <input ref={pw_ref} type="password"/> <br />
        비밀번호 확인 : <input ref={pw_ref} type="password"/>  
        <button onClick={signupFB}>회원가입</button>
      </div>
    </ContentBox>
  );
};

const ContentBox = styled.div`
  background-color: #fff;
  width: 70%;
  padding: 5px;
  box-sizing: border-box;
  margin: 15px auto;
  position: relative; 
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:nth-child(odd) {
    margin: 20px 0;
  }
`;
const ContentTitle = styled.div`
  font-size: 2rem;
  text-decoration: underline;
`;

export default Signup;

// export const Sign = ({input_ref, setText }) => {
//     return (
//         <button onClick={() => {
//             console.log(input_ref.current.value);
//             // textarea로 옮겨줌
//             setText(input_ref.current.value);
//             // 옮기고 난 후 인풋박스 clear
//             input_ref.current.value="";
//         }}>버튼</button>
        
//     );
// };
