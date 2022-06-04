import { NavigationLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <NavigationLink to="/login">Sign in</NavigationLink>
      <NavigationLink to="/register">Sign up</NavigationLink>
    </div>
  );
}
