/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import OrderScreen from './src/page/order/OrderScreen';

AppRegistry.registerComponent(appName, () => OrderScreen);
