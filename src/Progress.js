import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
  const dict_list = useSelector((state) => state.dict.list);
  console.log(dict_list);
// 완료된거 카운트
  let count = 0;
  dict_list.map((d, idx) => {
    if (d.completed) {
      count++;
    }
  });

  console.log(count);
  return (
    <ProgressBar>
      <HighLight width={(count / dict_list.length) * 100 + "%"} />
      <Dot/>
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  background: #eee;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

/* 애니메이션효과 -transition*/
const HighLight = styled.div`
  background: #cbb6f0;
  transition: 1s; 
  width: ${(props) => props.width};
  height: 20px;
  border-radius: 10px;
`;

const Dot = styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  border: 5px solid #cbb6f0;
  border-radius: 40px;
  margin: 0px 0px 0px -20px;
`;


export default Progress;