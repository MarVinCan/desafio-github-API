import { Link } from "react-router-dom";
import "./styles.css";
import Button from "../../../components/Button";

export default function HomeBody() {
  return (
    <main>
      <div className="ghapi-container ghapi-text-homebody">
        <h1>Desafio Github API</h1>
        <h4>DevSuperior - Escola de programação</h4>
        <div className="ghapi-button-container">
          <Link to="search">
            <Button text={"Começar"} />
          </Link>
        </div>
      </div>
    </main>
  );
}
