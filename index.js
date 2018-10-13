/** @format */

import { Navigation } from 'react-native-navigation';
import { persistStore as persistStoreRaw } from 'redux-persist';

import store from './src/global/redux/store';
import { registerScreens } from './src/registerScreens';

/**
 * Wait till RNN is ready to listen and resolve
 * @returns {Promise} - Promise that resolves when RNN is ready to listen
 */
const registerNavigationListener = () => new Promise((resolve) => {
  Navigation.events().registerAppLaunchedListener(() => {
    resolve();
  });
});

/**
 * Wait till our store is persisted
 * @param {store} storeToPersist - The redux store to persist
 * @returns {Promise} - Promise that resolves when the store is rehydrated
 */
const persistStore = storeToPersist => new Promise((resolve) => {
  persistStoreRaw(storeToPersist, undefined, () => {
    resolve();
  });
});

/**
 * We register screens
 *  then we wait for
 *    - Navigation to be ready
 *    - Store to be rehydrated
 *    - Icons to be loaded.
 * and then we finally initialize
 * layout accordingly.
 */
async function bootstrap() {
  registerScreens(store);

  // TODO: wait for Vector Icons
  await Promise.all([registerNavigationListener(), persistStore(store)]);

  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'screen.App',
          }
        }]
      }
    }
  });
}

/**
 * INIT function of our app
 */
bootstrap();


