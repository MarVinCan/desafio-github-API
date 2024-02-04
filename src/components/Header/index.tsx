import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
  return (
    <header>
      <div className='ghapi-container'>
        <Link to ="/"> <h1>Github API</h1> </Link>
      </div>
    </header>
  );
}
