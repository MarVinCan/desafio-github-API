/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.css";
import InformationCard from "../../../components/InformationCard";

import { useEffect, useState } from "react";
import * as userService from "../../../services/user-services";
import { UserDTO } from "../../../models/users";
import ButtonSubmit from "../../../components/ButtonSubmit";
import NotFoundUser from "../../../components/NotFoundUser";

export default function SearchPage() {
  const [user, setUser] = useState<UserDTO>({
    avatar_url: "",
    followers: 0,
    location: "",
    name: "",
    url: "",
  });

  const [click, setClick] = useState(0);

  const [conditions, setConditions] = useState({
    showResponse: false,
    noContent: false,
  });

  type FormData = {
    searchGit: string;
  };

  const [formData, setFormData] = useState<FormData>({
    searchGit: "",
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    setClick(click + 1);
    formData.searchGit === ""
      ? setConditions({ ...conditions, showResponse: false })
      : setConditions({ ...conditions, showResponse: true });
  }

  useEffect(() => {
    if (formData.searchGit != "")
      userService
        .findUser(String(formData.searchGit))
        .then((response) => {
          console.log(response.data);
          setConditions({ ...conditions, noContent: false });
          setUser(response.data);
        })
        .catch(() => setConditions({ ...conditions, noContent: true }));
  }, [click]);

  return (
    <main>
      <div className="ghapi-container">
        <div className="ghapi-search-card">
          <h2>Encontre um perfil Github</h2>
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                name="searchGit"
                value={formData.searchGit}
                type="text"
                placeholder="Usuário Github"
                onChange={handleInputChange}
              />
            </div>
            <ButtonSubmit text={"Encontrar"} />
          </form>
        </div>
        <div>
          {!conditions.showResponse ? (
            <></>
          ) : conditions.noContent ? (
            <NotFoundUser/>
          ) : (
            <InformationCard user={user} />
          )}
        </div>
      </div>
    </main>
  );
}
