const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

function App() {
  const [click, setClick] = React.useState(true);
  const [count, setCount] = React.useState(0);

  React.useEffect(
    function () {
      console.log(document.getElementById("judul"));
    },
    [click]
  );

  return (
    <>
      <h1 id="judul">Hello ini Judul</h1>
      <button
        onClick={function () {
          setClick(false);
        }}
      >
        Click Here
      </button>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Click Here
      </button>
      Nilai saat ini: {count}
    </>
  );
}

root.render(<App />);
