import React from 'react';
import Proj from './Proj';
import Title from './Title';
import Nav from './Nav';
import About from './About';
import Products from './Products';
import Markets from './Markets';
import News from './News';
import Authenticate from './Authenticate';
import SingleProject from './SingleProject';
import Contact from './Contact';
import Input from './Input';
import Compose from './Compose';
import axios from 'axios';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {projectsList: [0], username: '', password: '', proj: [{title: '', desc: '', link: '', imageUrls: ['']}], projArr: [], projectToRender: ''};
    this.createProject = this.createProject.bind(this);
    this.projectClick = this.projectClick.bind(this);
    this.createSingleProject = this.createSingleProject.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangePwd = this.onChangePwd.bind(this);
    this.submitClick = this.submitClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

  onChangeUser(event, e) {
    this.setState({username: event.target.value});
  }

  onChangePwd(event, e) {
    this.setState({password: event.target.value});
  }

  handleChange(event, e) {
    this.setState({search: event.target.value.toLowerCase()}, () => {

      var arr = [];
      for(var g=0; g < this.state.proj.length; g++) {
        if(this.state.proj[g].title.toLowerCase().startsWith(this.state.search)) {
          arr.push(g);
        }
      }
      this.setState({projectsList: arr}, () => {
      });
    });
  }

  submitClick (e) {
    e.preventDefault();
    var formData = {
      username: this.state.username,
      password: this.state.password
    };

    const transport = axios.create({
      withCredentials: true
    });

    transport.post('http://localhost:5002/authenticate', formData).then(res => {console.log(res.data)}).catch(err => console.log(err));
    /*window.location.href = "http://localhost:3000/compose";*/
  }

  componentDidMount() {

    axios.get('http://localhost:5002/projectss')
    .then(
      res => {
        this.setState({proj: this.state.proj.concat(res.data)});
        for(var z=0; z < this.state.proj.length - 1; z++) {
          this.setState({projectsList: this.state.projectsList.concat(z + 1)}, () => {
            console.log(res.data);
          });
          console.log(res.data);
          console.log(this.state.proj);
      }
      })
      .catch(
        err => console.log(err)
      );
  }

  createProject(proj, index){
    if(proj !== 0) {
      return(
        <div className="projectCard" key = {this.state.proj[proj]._id}>
          <Link to= "/singleproject" style={{textDecoration: "none"}}>
            <Proj
              key = {this.state.proj[proj]._id}
              //id = {this.state.proj[proj]._id}
              //image = {this.state.proj[proj].imageUrls[0]}
              //title = {this.state.proj[proj].title}
              //description = {this.state.proj[proj].desc}
              //projectClick = {this.projectClick}
            />
          </Link>
        </div>
      );
    }
  }

  projectClick(projectClicked, e) {
    console.log(projectClicked);
    this.setState({projectToRender:projectClicked});
  }

  createSingleProject(){

    for(var y = 1; y < this.state.proj.length; y++) {
      if(this.state.projectToRender === this.state.proj[y]._id)
      {
        var projClicked = this.state.proj[y];
        break;
      }
    }

    return(
      <div>
        <Link to="/projects">
          <button className="backbtn"><i  className="fas fa-arrow-left"></i><span>Back</span></button>
        </Link>
        <SingleProject
          key = {projClicked._id}
          id = {projClicked._id}
          images = {projClicked.imageUrls}
          description = {projClicked.desc}
          title = {projClicked.title}
          link = {projClicked.link}
        />
      </div>
    );
  }

  render() {
  return (
    <Switch>
      <Route path="/home">
        <Nav />
        <Title />
        <Contact />
      </Route>
      <Route path="/products">
        <Nav />
        <Products />
        <Contact />
      </Route>
      <Route path="/singleproduct">
        {this.createSingleProject}
      </Route>
      <Route path="/about">
        <Nav />
        <About />
        <Contact />
      </Route>
      <Route path="/markets">
        <Nav />
        <Markets />
        <Contact />
      </Route>
      <Route path="/news">
        <Nav />
        <News />
        <Contact />
      </Route>
      <Route path="/authenticate">
        <Authenticate onChangeUser={this.onChangeUser} onChangePwd={this.onChangePwd} submitClick={this.submitClick}/>
      </Route>
      <Route path="/compose">
        <Compose authenticate={this.state.authenticate}/>
      </Route>
    </Switch>
  );
}
}

export default App;
