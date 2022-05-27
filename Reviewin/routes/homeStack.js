import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import ListBarang from '../screens/list_barang';
const screen = {
    Home: {
        screen: ListBarang,
    }
}

const HomeStack = createStackNavigator(screen);

export default createAppContainer(HomeStack);