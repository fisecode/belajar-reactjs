const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
function App() {
  const [activity, setActivity] = React.useState("");
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState("");
  function generateId() {
    return Date.now();
  }
  function saveToDoHandler(event) {
    event.preventDefault();
    if (!activity) {
      return setMessage("Nama aktifitas jangan kosong!");
    }
    setMessage("");
    if (edit.id) {
      const updatedTodo = {
        ...edit,
        activity
      };
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;
      setTodos(updatedTodos);
      return cancelEditHandler();
    }
    setTodos([...todos, {
      id: generateId(),
      activity
    }]);
    setActivity("");
  }
  function removeToDoHandler(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
    if (edit.id) cancelEditHandler();
  }
  function editToDoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }
  function cancelEditHandler() {
    setEdit({});
    setActivity("");
  }
  function doneTodoHandler(todo) {
    const updatedTodo = {
      ...todo,
      done: todo.done ? false : true
    };
    const editTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id == todo.id;
    });
    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;
    setTodos(updatedTodos);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "red"
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveToDoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: activity,
    placeholder: "Nama aktifitas",
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? "Simpan Perubahan" : "Tambah"), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEditHandler
  }, "Batal Edit")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: doneTodoHandler.bind(this, todo)
    }), todo.activity, todo.done ? "(Selesai)" : "(Belum Selesai)", /*#__PURE__*/React.createElement("button", {
      onClick: editToDoHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeToDoHandler.bind(this, todo.id)
    }, "Hapus"));
  })) : /*#__PURE__*/React.createElement("p", null, "Tidak ada todo"));
}
root.render( /*#__PURE__*/React.createElement(App, null));