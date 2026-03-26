import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputCreate = ({ fetchData }) => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const urlApi = "http://localhost:3000/create";

  const handleSubmit = async () => {
    if (title.trim() === "") return;

    try {
      const response = await fetch(urlApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });

      const data = await response.json();
      console.log("Tarea creada:", data);

      setTitle("");
      await fetchData();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Crear tarea</h2>

      <input
        type="text"
        placeholder="Escribe una tarea"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button onClick={handleSubmit}>Enviar</button>
    </>
  );
};

export default InputCreate;