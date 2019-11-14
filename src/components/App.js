import React from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component{
  state={ language:'english'};

  onLangaugeChange = (language)=>{
    this.setState({language:language});
  }

  render(){
    return (
      <div className='ui container'>
      <LanguageStore>
        <LanguageSelector onLangaugeChange={this.onLangaugeChange} />
          <ColorContext.Provider value='red'>
              <UserCreate/>
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    )}
}

export default App;
