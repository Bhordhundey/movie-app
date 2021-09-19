import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/global'; 
import MovieComponent from './components/Moviecomponent'
import axios from 'axios';


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between ;
 /* background-color: black; */
 color: white;
 align-items: center;
 padding: 10px;
 font-size: 25px;
 font-weight: bold;
 box-shadow: 0 3px 6px 0 #555;
 background: rgba(0,0,0,1);
 background: -moz-linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 34%, rgba(44,153,221,1) 100%);
 background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(0,0,0,1)), color-stop(34%, rgba(0,0,0,1)), color-stop(100%, rgba(44,153,221,1)));
 background: -webkit-linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 34%, rgba(44,153,221,1) 100%);
 background: -o-linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 34%, rgba(44,153,221,1) 100%);
 background: -ms-linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 34%, rgba(44,153,221,1) 100%);
 background: linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 34%, rgba(44,153,221,1) 100%);
 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#2c99dd', GradientType=1 );
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  background-color: white;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
  align-items: center;
`
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin: 0px 15px ;
  width: 100%;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;  // Move component to next row when screen can't contain the list
  padding: 30px;
  justify-content: space-evenly;
`;
 
const App: React.FC = () => {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState(0);
  const [movieList, updateMovieList] = useState([]);

  const fetchData = async (searchString: string) => {
   
    const response = await axios.get(`${process.env.REACT_APP_OMDBAPI_BASE_URL}/?s=${searchString}&apikey=${process.env.REACT_APP_OMDBAPI_API_KEY}`)
    console.log(response);
    updateMovieList(response.data.Search)
  }
  
  
  // Debouncing
  const onTextChange = (e: React.ChangeEvent<any>) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = window.setTimeout(() => fetchData(e.target.value ), 500);
    updateTimeoutId(timeout)
  };

  return (
    <>
     <GlobalStyle />
        <Container>
           <Header>
             <AppName>
               <MovieImage src="/movie-icon.svg" />
               Movie App
             </AppName>
             <SearchBox>
                <SearchIcon src="/search-icon.svg"/>
                <SearchInput placeholder="Search Movie" 
                value={searchQuery}  // 2 way binded
                onChange={onTextChange}/>
             </SearchBox>
           </Header>
           <MovieListContainer>
              {movieList?.length
                ? movieList.map((movie, index) => <MovieComponent key={index} movie={movie} />)
                : "No Movie Search"
            }
           </MovieListContainer>
        </Container>
       </>
  )

}

export default App;
