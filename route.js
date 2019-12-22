import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import StartScreen from './screens/Start';

const StackNavigator = createStackNavigator({
    Start: {
        // screen: StartScreen,
    },

    AnimationColor: {

    }
});

export default AppContainer = createAppContainer(StackNavigator);