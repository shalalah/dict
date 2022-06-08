//  * 1. 뷰 만들기 / 반으로 가르기(목록을 보여줄 뷰)
//  * 2. 제목, 내용, 공부시간을 기입할 인풋이 필요 / 인풋 내용을 하나로 묶어줘야해!
//  * 3. 입력한 내용이 추가되어야 함 - state를 사용 
//  * 4. state에 추가한 내용이 list 뷰에 나와야 함
import React from "react";
import {
    Button,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    TextField,
    Typography,
  } from "@material-ui/core";
  

const One = (props) => {
    const [til_list, setTilList] = React.useState([]);
    const title_ref = React.useRef(null);
    const content_ref = React.useRef(null);
    const time_ref = React.useRef(null);

    const addTIL = () => {
        const til_data = {
        title: title_ref.current.value,
        content: content_ref.current.value,
        time: time_ref.current.value,
        };

    // 콘솔로 확인해요!
    console.log(til_data);

    // state에 저장해요!
    setTilList([...til_list, til_data]);

    // 인풋은 지워줍시다! :)
    // title_ref.current.value = "";
    // content_ref.current.value = "";
    // time_ref.current.value = "";
      };
    return (
    <Card elevation={5}>    
    
    <CardHeader title=" 제목적어주세요" />
        <CardContent>
        <Typography variant="body1" component="p">
                <div className="til-item">
                    {/* <p>시간</p> */}
                </div>
        </Typography>
        <div>
            <TextField label="과목"  /> <br/>
            <TextField label="내용"  /> <br/>
            <TextField label="공부시간" /> <br/>
        </div>
            {/* <div className="input-area"> */}
                {/* <div>
                    <span>과목</span>
                    <input></input>
                </div>
                <div>
                    <span>내용</span>
                    <input></input>
                </div>
                <div>
                    <span>공부시간</span>
                    <input></input>
                </div> */}
        </CardContent>
        <CardActions>
            <Button variant="contained" color="primary" onClick={addTIL}>
                    저장하기
            </Button>
        </CardActions>
    </Card>
        
      
    );
};

export default One;