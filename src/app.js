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
        activity,
      };

      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });

      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;

      setTodos(updatedTodos);
      return cancelEditHandler();
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity,
      },
    ]);
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
      done: todo.done ? false : true,
    };

    const editTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id == todo.id;
    });

    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;

    setTodos(updatedTodos);
  }

  return (
    <>
      <h1>Simple Todo List</h1>
      {message && <div style={{ color: "red" }}>{message}</div>}
      <form onSubmit={saveToDoHandler}>
        <input
          type="text"
          value={activity}
          placeholder="Nama aktifitas"
          onChange={function (event) {
            setActivity(event.target.value);
          }}
        />
        <button type="submit">{edit.id ? "Simpan Perubahan" : "Tambah"}</button>
        {edit.id && <button onClick={cancelEditHandler}>Batal Edit</button>}
      </form>
      {todos.length > 0 ? (
        <ul>
          {todos.map(function (todo) {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={doneTodoHandler.bind(this, todo)}
                />
                {todo.activity}
                {todo.done ? "(Selesai)" : "(Belum Selesai)"}
                <button onClick={editToDoHandler.bind(this, todo)}>Edit</button>
                <button onClick={removeToDoHandler.bind(this, todo.id)}>
                  Hapus
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Tidak ada todo</p>
      )}
    </>
  );
}

root.render(<App />);
