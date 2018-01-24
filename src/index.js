/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import type { Match } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

type Props = {
  match: Match,
};

const Topic = (props: Props) => (
  <div>
    <h3>{props.match.params.topicId}</h3>
  </div>
);

const Topics = (props: Props) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${props.match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${props.match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={props.match.url}
      render={() => (
        <h3>Please select a topic.</h3>
      )}
    />
  </div>
);

const Root = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);
const rootEl = document.getElementById('root');
if (!(rootEl instanceof Element)) {
  throw new Error('invalid type');
}
ReactDOM.render(<Root />, rootEl);
