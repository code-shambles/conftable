import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//import store from '../redux/store';


//import LS from '../tool/Ls';

import { Header, Main } from '../components';

import './App.less';

//const store = configureStore();

// const LS_KEY = 'cft-submissions';

// const initSubmissionsFromLs = () => {
//   return LS.getJson(LS_KEY);
// };

const App = () => {

  // const [submissions, setSubmissions] = useState(initSubmissionsFromLs());

  // const handleSubmissionsChange = json => {
  //   LS.set(LS_KEY, json);
  //   setSubmissions(json.submissions);
  // };

  return (
    <Router>
      <Header />
      <Main submissions={[]} />
    </Router>
  );
}

export default App;