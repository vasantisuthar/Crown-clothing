import React from "react";
import Directory from "../../components/directory/directory.component";
// import './homePage.styles.css'
import { HomePageContainer } from "./homePage.styles";

const HomePage = () => {
    return ( 
        <HomePageContainer>
            <Directory/>
        </HomePageContainer>
    );
}

export default HomePage;