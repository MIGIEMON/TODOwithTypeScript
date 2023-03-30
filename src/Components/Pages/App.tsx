import { TaskList } from "../Organisms/TaskList";
import { AppTemplate } from "../Templates/AppTemplate";

function App() {
  return (
    <div className="App">
      <AppTemplate>
        <TaskList />
      </AppTemplate>
    </div>
  );
}

export default App;
