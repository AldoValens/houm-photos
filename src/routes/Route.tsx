import {Routes, Route, BrowserRouter} from "react-router-dom";
import styled from "styled-components";
import { Header } from '../shared/components/Header/Header';
import { HomeScreen } from '../pages/home/Home';
import { SearchScreen } from '../pages/search/Search';

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Header />
                <MainContainer>
                    <div className={"container"}>
                       <Routes>
                           <Route path="/" element={<HomeScreen/>} />
                           <Route path="search" element={<SearchScreen/>} />
                       </Routes>
                    </div>
                </MainContainer>
        </BrowserRouter>
    )
}


const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 70px 0px 0px 0px;
  background: ${ props => props.theme.themeBackground };
`
