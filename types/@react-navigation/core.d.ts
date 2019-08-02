declare module '@react-navigation/core' {
  import * as React from 'react';
  import { Transition } from 'react-native-reanimated';
  import {
    NavigationRouteConfigMap,
    NavigationContainer,
    SwitchNavigatorConfig,
  } from 'react-navigation';

  export const SceneView: React.ComponentType<{
    screenProps: unknown;
    navigation: object;
    component: React.ComponentType<any>;
  }>;

  export function createNavigator(
    StackView: React.ComponentType<any>,
    router: any,
    stackConfig: object
  ): NavigationContainer;

  export function SwitchRouter(
    routeConfigMap: NavigationRouteConfigMap,
    switchConfig: SwitchNavigatorConfig & {
      transition?: React.ElementType<Transition>;
    }
  );
}
