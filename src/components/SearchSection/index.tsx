import Button from '../Button';
import './styles.css';

export default function SearchSection(){
    return (
        <div className='ghapi-search-card'>
            <h2>Encontre um perfil Github</h2>
            <div>
                <input type="text" placeholder='Usuário Github'/>
            </div>
            <div>
                <Button text={'Encontrar'} />
            </div>
        </div>
    );
}