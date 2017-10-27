import React from 'react';
import { DatePicker } from 'antd';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Counter from './Counter';
import styles from './style/BasicExample-m.css';
export default class BasicExample extends React.Component{
  render(){
    return (
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home1</Link></li>
              <li><Link to="/about">About1</Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>
            

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about"  component={About}/>
            <Route path="/topics" component={Topics}/>
          </div>
        </Router>
      );
  }
}


const Home = () =>(
  <div>
    <h2 className={styles.red}>Home</h2>
    <p className={styles.red}>字体颜色怎么样</p>  
  </div>
)

const About = () =>(
  <div>
    <h2>About1111</h2>
  </div>
)

const Topics = ({match}) =>(
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v.State
        </Link>
      </li>
    </ul>


    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={()=>(<h3>Please select a topic.</h3>)}/>
  </div>
)


const Topic = ({match}) =>(
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
