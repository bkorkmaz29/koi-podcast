import styled from 'styled-components';

export const StyledBurger = styled.div`
 
    position: absolute;
    top: 30px;
    left: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 16rem;
    height: 5rem;
    background: transparent;
    border: 3px solid #f3430c;;
    border-radius: 9px;
    cursor: pointer;
    padding: 0.8rem;
    z-index: 10;

  .logo-wrapper {
   
    display: flex;
    margin: auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 25%;
    font-family: "Major Mono Display", monospace;
    font-weight: bold;
    font-size: 1rem;
    
    

  img {

    max-width: 100%;
    max-height: 100%;
  }

 p {
  transition: all 0.3s linear;
  color: ${({ open }) => open ? 'black' : 'white'};
 }

  span {
    color: #f3430c;
  }


  }

  .burger {
    margin-left: 1rem;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
     border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
}
`;
