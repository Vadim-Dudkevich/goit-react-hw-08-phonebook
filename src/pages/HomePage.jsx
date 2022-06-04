import { Link } from 'react-router-dom';
import homeBg from '../images/home.png';
import Container from 'components/Container';

export default function HomePage() {
  return (
    <Container>
      <h4>Welcome to PhoneBook App.</h4>
      <p>
        Please <Link to="/register">Sign Up</Link> or{' '}
        <Link to="/logIn">Sign In</Link> to get access to the PhoneBook
      </p>
      <img
        src={homeBg}
        alt="homeBg"
        width={'70%'}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
        }}
      />
    </Container>
  );
}
