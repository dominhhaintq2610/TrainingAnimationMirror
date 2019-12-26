import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import StartScreen from './screens/Start';
import AnimationColor from './screens/AnimationColor';

const StackNavigator = createStackNavigator(
    {
        Start: {
            screen: StartScreen,
        },

        AnimationColor: {
            screen: AnimationColor,
        }
    },
    {
        initialRouteName: 'Start',
    }
);

export default AppContainer = createAppContainer(StackNavigator);