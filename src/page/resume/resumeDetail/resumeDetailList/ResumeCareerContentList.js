import React, { useCallback, useState } from "react";
import ResumeDetailAddListBtn from "./ResumeDetailAddListBtn";
import ResumeDetailDraggableList from "./ResumeDetailDraggableList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { resumeDetailData } from "../../../../data/resumeDetailListData";

function ResumeCareerContentList() {
  const [datas, setDatas] = useState(resumeDetailData);
  const onDragEnd = useCallback((result) => {
    const { destination, source, draggableId } = result;
    // 리스트 밖으로 drop되면 destination이 null
    if (!destination) return;
    // 출발지와 도착지가 같으면 할 게 없다
    if (destination.droppableId === source.droppableId && source.index === destination.index) return;
    console.log(result);
    const newData = Array.from(datas);
    const draggItem = newData[draggableId - 1];
    const destItem = newData[destination.index];
    console.log(newData);
    newData.splice(draggableId - 1, 1, destItem);
    newData.splice(destination.index, 1, draggItem);
    console.log(newData, draggItem, destItem, destination.index);

    setDatas(newData);
  }, []);
  return (
    <div>
      <ResumeDetailAddListBtn />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="first-box">
          {(provided, snapshot) => (
            <div className="top-container" ref={provided.innerRef} {...provided.droppableProps}>
              <div className="box-container">
                {datas.map((data, idx) => (
                  <ResumeDetailDraggableList key={data.id} index={idx} testData={data} />
                ))}
              </div>
            </div>
            // {provided.placeholder}
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default ResumeCareerContentList;
