import { useState, useRef } from "react";
import FocusLock from "react-focus-lock";

import { Burger, Menu, Header } from "../../components";
import { HomeContainer, SearchWrapper } from "./Home.styled";
import { useOnClickOutside } from "../../hooks";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLInputElement | null>(null);

  useOnClickOutside(node, () => setOpen(false));
  return (
    <HomeContainer >
     
        <Header />
        
        <div ref={node}>
          <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} />
           <Menu open={open} setOpen={setOpen} />
          </FocusLock>
          </div>
          <SearchWrapper>
          <SearchBar />
        </SearchWrapper>
    
    </HomeContainer>
  );
};

export default Home;
