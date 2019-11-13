import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component{
  state={ language:'english'};

  onLangaugeChange = (language)=>{
    this.setState({language:language});
  }

  render(){
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i className='flag us' onClick={()=>this.onLangaugeChange('english')} />
          <i className='flag nl' onClick={()=>this.onLangaugeChange('dutch')}/>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value='red'>
              <UserCreate/>
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    )}
}

export default App;
