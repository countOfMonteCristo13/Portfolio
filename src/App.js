

import React, { Component } from 'react';
import './App.css';
import ProjectSidePage from './components/ProjectSidePage/ProjectSidePage';

import HomePage from './containers/HomePage/HomePage';

import Lottie from 'lottie-react';
import loadingPortfolio from './assets/loadingPortfolio.json'
import GetInTouch from './containers/GetInTouch/GetInTouch';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const initialState = {
  project: 0,
  isLoading: true,
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
    this.handleProjectChange = this.handleProjectChange.bind(this);
    }

    handleProjectChange(i) {
      this.setState({ project: i });
    }

    componentDidMount() {
      // Simulate a delay to show the loading animation
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2200);
    }
    

    changeProject(i){
      this.state({project:i});
    }




  render(){

  const {project,isLoading } = this.state; // destructure state


  return (
    <>
      {isLoading && (
        <div className='p__loading flex__center'>
          <Lottie animationData={loadingPortfolio} loop={true} autoplay={true} height={200} width={200}/>
        </div>
      )}
      {!isLoading && (
        <div className="App">

          <Router>
            <Routes>
              <Route path="/" element={<HomePage onProjectChange={this.handleProjectChange}/>} />
              <Route path="/project/:projectName" element={<ProjectSidePage i={project}/>} />
              <Route path="/findme" element={<GetInTouch/>} />
            </Routes>
          </Router>

        </div>
      )}

      
    </>
  );

  }
}

export default App;
