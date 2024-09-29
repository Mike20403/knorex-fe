import authenticationStore from '@/stores/authentication-store';
import { useStore } from '@lamgiahung112/react-simple-store';

function NavigationBar() {
  const { user } = useStore(authenticationStore);
  return <div>Navbar for user {user?.fullName}</div>;
}

export default NavigationBar;
