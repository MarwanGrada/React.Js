import React, {Component }from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyAxCfKbzFqYQV9da2edvNwf1b_qcxkGarg'


// Creat a new component. This component should 
// reduce HTML
class App extends Component{
  constructor(props){
   super(props);

   this.state = {videos : []} ;

   YTSearch({key: API_KEY, term: 'surfboards'}, videos =>{
    this.setState({ videos });
    }); 
  }

  render(){
    return (
      <div> 
       <SearchBar />
       <VideoList videos={this.state.videos}/>
      </div>
   );
  }
  
}

// Take this component's generated HTML and put it 
// on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'))