import styled from 'styled-components';
import { Order } from '../Order/Order';

const Navbar = styled.nav`
  background-color: #013884;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 100%;
`;

const Logo = styled.img`
  height: fit-content;
  width: 50%;
  @media screen and (min-width: 600px) {
    width: unset;
  }
`;

export function Header() {
  return (
    <Navbar>
      <Logo
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="Santex logo"
        aria-hidden
      />
      <div>
        <Order />
      </div>
    </Navbar>
  );
}
