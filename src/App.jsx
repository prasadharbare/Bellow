import Bellow from "./Bellow";
import items from "./assets/items.json";

function App() {
  const [lastClicked]
  return (
    <div className="flex justify-center items-center h-screen">
      <Bellow
        data={items}
        filterKeyword=""
        isOpen
        underline={false}
        showWordCount
      />
    </div>
  );
}

export default App;
