// styles
import "./Home.css";
import { useFetch } from "../../hooks/useFetch";
export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data &&
        data.map((e) => (<h1 key={e.id}>{e.title}</h1>)
          )
        }
    </div>
  );
}
