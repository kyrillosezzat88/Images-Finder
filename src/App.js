import React from 'react';
import SearchCntextProvidor from './Context-API/SearchContext';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Home from './Components/Home';
import ImgDetailes from './Components/ImgDetails';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route exact path='/'>
              <SearchCntextProvidor>
                <Home />
              </SearchCntextProvidor>
            </Route>
            <Route path='/:Image_id' render={(props) => <SearchCntextProvidor> <ImgDetailes {...props} /> </SearchCntextProvidor>} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
