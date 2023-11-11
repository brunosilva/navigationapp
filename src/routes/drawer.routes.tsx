import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackRoutes from './stack.routes';
import TabRoutes from "./tab.routes";


const Drawer = createDrawerNavigator();


export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ title: '' }}>
      <Drawer.Screen
        name="profile"
        component={StackRoutes}
        options={{
          drawerIcon: ({color, size }) => <Feather name="user" color={color} size={size} />,
          drawerLabel: 'Meu Perfil',
        }}
      />
      <Drawer.Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: ({color, size }) => <Feather name="home" color={color} size={size} />,
          drawerLabel: 'Início',
        }}
      />
    </Drawer.Navigator>
  )
}