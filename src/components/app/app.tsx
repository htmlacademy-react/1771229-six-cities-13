import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';


import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';

import Screen404 from '../../pages/screen-404/screen-404';
import PrivateRoute from '../private-route/private-route';
import {HelmetProvider} from 'react-helmet-async';

import Header from '../header/header';

type MainScreenProps = {
  cardAmount: number;
}

export default function App({cardAmount}: MainScreenProps): JSX.Element {
  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Header />}>
            <Route
              path = {AppRoute.Root}
              index element = {<MainScreen cardAmount={cardAmount} />}
            />
            <Route
              path = {AppRoute.Favorites}
              element = {
                <PrivateRoute authorizationStatus = {AuthorizationStatus.NoAuth}>
                  <FavoritesScreen />
                </PrivateRoute>
              }
            />
            <Route
              path = {AppRoute.Login}
              element = {<LoginScreen />}
            />
            <Route path = {AppRoute.Offer}>
              <Route path = '/offer/:id' element = {<OfferScreen />} />
            </Route>

            <Route
              path = '*'
              element = {<Screen404 />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

//  return (<MainScreen cardAmount = {cardAmount}/>);
