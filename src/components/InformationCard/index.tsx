import { UserDTO } from "../../models/users";
import "./styles.css";

type Props = {
    user: UserDTO;
  };

export default function InformationCard({user}:Props) {
  return (
    <div>
      <div className="ghapi-form-container">
        <div><img src={user.avatar_url} alt={user.name} /></div>
        <div className="ghapi-information-card">
          <h3>Informações</h3>
          <div>
            <div className="ghapi-itens-information">Perfil:<a>{user.url}</a></div>
            <div className="ghapi-itens-information">Seguidores: <p>{user.followers}</p></div>
            <div className="ghapi-itens-information">Localidade: <p>{user.location}</p></div>
            <div className="ghapi-itens-information">Nome: <p>{user.name}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
