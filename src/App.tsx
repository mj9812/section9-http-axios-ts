import * as React from 'react';
import Blog from './containers/Blog/Blog';

class App extends React.Component 
{
  public render() 
  {
    return (
      <div className="App">
        <Blog />
      </div>
    );
  }
}

export default App;
