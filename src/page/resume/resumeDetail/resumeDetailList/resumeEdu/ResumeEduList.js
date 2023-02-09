import React, { useCallback, useEffect, useState } from "react";
import ResumeDetailAddListBtn from "../ResumeDetailAddListBtn";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { resumeApi } from "../../../../../api";
import { useParams } from "react-router-dom";
import ResumeEduDraggableList from "./ResumeEduDraggableList";

function ResumeEduList() {
  const [datas, setDatas] = useState();
  const [render, setRender] = useState(false);
  const resumeId = useParams();
  useEffect(()=>{
    const jwt = localStorage.getItem('jwt')
    resumeApi.getResumeDetail(resumeId.id,jwt)
    .then((Response)=>{
      console.log(Response.data)
      if(Response.data.isSuccess){
        setDatas(Response.data.result[0].schoolsInfo)
        console.log(datas,Response.data.result[0].schoolsInfo)
      }
    })
    .catch((Error)=>{
      console.log(Error);
    })
  },[render]) 

  const onDragEnd = useCallback((result) => {
    const { destination, source, draggableId } = result;
    // 리스트 밖으로 drop되면 destination이 null
    if (!destination) return;
    // 출발지와 도착지가 같으면 할 게 없다
    if (destination.droppableId === source.droppableId && source.index === destination.index) return;
    console.log(result,datas);
    const newData = datas;
    console.log(newData);
    const draggItem = newData.find(e=>e.idSchool === Number(draggableId));
    const draggItemInx = newData.findIndex(e=>e.idSchool === Number(draggableId))
    const destItem = newData[destination.index];
    draggItem.orderSchool = draggItemInx+1
    destItem.orderSchool = destination.index+1
    newData.splice(draggItemInx, 1);
    newData.splice(destination.index, 0, draggItem);
    console.log(newData, draggItem, destItem, destination.index,destItem.idSchool,draggItem.idSchool);

    setDatas(newData);
  }, [datas]);


  const addSchool = () => {
    const jwt = localStorage.getItem("jwt");
    console.log("작동 add 버튼", resumeId.id, jwt);
    
    resumeApi
      .addSchoolList(resumeId.id)
      .then((Response) => {
        console.log(Response.data);
        if (Response.data.isSuccess) {
            resumeApi
              .getResumeDetail(resumeId.id, jwt)
              .then((Response) => {
                console.log(Response.data);
                if (Response.data.isSuccess) {
                  setDatas(Response.data.result[0].schoolsInfo);
                  console.log(datas, Response.data.result[0].schoolsInfo);
                }
              })
              .catch((Error) => {
                console.log(Error);
              });
          }
      })
      .catch((Error) => {
        console.log(Error);
      });
  };  
  console.log(datas)
  return (     
    <div>
      <ResumeDetailAddListBtn onClick={addSchool} />
      {datas && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="first-box">
            {(provided, snapshot) => (
              <div className="top-container" ref={provided.innerRef} {...provided.droppableProps}>
                <div className="box-container">
                  {datas?.map((data, idx) => (
                    <ResumeEduDraggableList render={render} setRender={setRender} key={data.id} index={idx} testData={data} />
                  ))}
                </div>
              </div>
              // {provided.placeholder}
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
}

export default ResumeEduList;
