import React, { useState } from "react";
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import { initialData } from "./initial-data";
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
//https://egghead.io/lessons/react-reorder-a-list-with-react-beautiful-dnd
