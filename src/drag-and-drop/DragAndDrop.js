import React from "react";
// import DragDropContext from "react-beautiful-dnd";

import Column from "./components/Column";
import { toDoDataMock } from "./helper/mockData";

class DragAndDrop extends React.Component {
  state = toDoDataMock;

  render() {
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const tasks = column.taskId.map(taskId => this.state.tasks[taskId]);

      return <Column key={column.id} title={column.title} tasks={tasks} />;
    });
  }
}

export default DragAndDrop;
