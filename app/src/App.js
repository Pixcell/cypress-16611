import logo from './logo.svg';
import {Auth0Provider} from '@auth0/auth0-react'
import './App.css';

function App() {
  return (
    
    <Auth0Provider
      domain={'cypress-16611.us.auth0.com'}
      clientId={'gZtAIfR5973OSqOweDzACbOA5z42JNU6'}
      redirectUri={window.location.origin}
      cacheLocation={'localstorage'}
    ><div data-cy='Hello'>Hello</div></Auth0Provider>
  );
}

export default App;
