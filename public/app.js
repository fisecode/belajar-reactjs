const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
function App() {
  const [click, setClick] = React.useState(true);
  const [count, setCount] = React.useState(0);
  React.useEffect(function () {
    console.log(document.getElementById("judul"));
  }, [click]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Hello ini Judul"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setClick(false);
    }
  }, "Click Here"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "Click Here"), "Nilai saat ini: ", count);
}
root.render( /*#__PURE__*/React.createElement(App, null));