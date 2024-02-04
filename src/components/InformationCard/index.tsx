import "./styles.css";

export default function InformationCard() {
  return (
    <form>
      <div className="ghapi-form-container">
        <div>Imagem</div>
        <div className="ghapi-information-card">
          <h3>Informações</h3>
          <div>
            <div className="ghapi-itens-information">Perfil: https://api.github.com/users/acenelio</div>
            <div className="ghapi-itens-information">Seguidores: 4379</div>
            <div className="ghapi-itens-information">Localidade: Uberlândia</div>
            <div className="ghapi-itens-information">Nome: Nelio Alves</div>
          </div>
        </div>
      </div>
    </form>
  );
}
