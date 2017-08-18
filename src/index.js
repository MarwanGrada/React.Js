import _ from 'lodash';
import React, {Component }from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAxCfKbzFqYQV9da2edvNwf1b_qcxkGarg'


// Creat a new component. This component should 
// reduce HTML
class App extends Component{

  constructor(props){
   super(props);

    this.state = {
     videos : [],
     selectVideo : null
    };  

    this.videoSearch('Dragoon Ball Z')  
 }


videoSearch(term){
    YTSearch({key: API_KEY, term: term}, videos =>{
     this.setState({ 
       videos: videos,
       selectVideo:videos[0]
       });
    }); 
  } 


  render(){
    const vSearch = _.debounce((term)=>{this.videoSearch(term)}, 300)
    return (
      <div> 
       <SearchBar onSearchTermChange= {vSearch} />
       <VideoDetail video= {this.state.selectVideo} />
       <VideoList 
         onVideoSelect = {selectVideo => {this.setState({selectVideo})}}
         videos={this.state.videos} 
         />
      </div>
   );
  }
  
}

// Take this component's generated HTML and put it 
// on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'))

