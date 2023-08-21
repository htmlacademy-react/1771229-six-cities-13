import {Helmet} from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Screen404(): JSX.Element {
  return (
    <div>
      <Helmet>
        <title>Ошибка 404</title>
      </Helmet>
      <h1>404! Looks like you are lost</h1>
      <p>
        <Link to={'/'}>Take me to the main page</Link>
      </p>
    </div>
  );
}
