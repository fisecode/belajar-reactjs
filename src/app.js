const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

function Tick() {
  const time = new Date();
  const timeNow = time.toLocaleTimeString();
  return <div className="box"></div>;
}

root.render(<Tick />);
