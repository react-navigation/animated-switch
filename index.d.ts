import * as React from 'react';
import { NavigationRouteConfigMap, SwitchNavigatorConfig, NavigationContainer } from 'react-navigation';
import { Transition } from 'react-native-reanimated';

export interface AnimatedSwitchNavigatorConfig extends SwitchNavigatorConfig {
  transition?: React.ReactElement<typeof Transition>;
}

export default function createAnimatedSwitchNavigator(
  routeConfigMap: NavigationRouteConfigMap,
  switchConfig?: AnimatedSwitchNavigatorConfig
): NavigationContainer;
