const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
function Tick() {
  const time = new Date();
  const timeNow = time.toLocaleTimeString();
  return /*#__PURE__*/React.createElement("div", {
    className: "box"
  });
}
root.render( /*#__PURE__*/React.createElement(Tick, null));