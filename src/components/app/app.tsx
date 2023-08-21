import MainScreen from '../../pages/main-screen/main-screen';

type MainScreenProps = {
  cardAmount: number;
}

export default function App({cardAmount}: MainScreenProps): JSX.Element {
  return (<MainScreen cardAmount = {cardAmount}/>);
}
