import React, { useState } from 'react';
import Disqus from 'disqus-react';
import { Summary, Chart, DetailTable, Footer, ShareButton } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { Divider, List } from 'semantic-ui-react';
import { updateTime } from './dateTime.js';
import { data } from './data/';
import { createBrowserHistory } from 'history';

import 'semantic-ui-css/semantic.min.css';
import './App.scss';

const history = createBrowserHistory();
const disqusShortname = 'covid-19-wileam-com';
const disqusConfig = {
  url: 'https://covid-19.wileam.com/',
  identifier: 'covid-19-wileam-com',
  title: 'CoVid-19 Updates - NSW'
};

const App = () => {
  let defaultActive = window.location.pathname.slice(1);
  if (!defaultActive) {
    history.push('/NSW');
    defaultActive = window.location.pathname.slice(1);
  }
  const [active, setActive] = useState(defaultActive);
  const navList = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'NT', 'ACT'];
  return (
    <Router history={history}>
      <div className='ui container center aligned nav-wrapper'>
        <List link horizontal>
          {navList.map(nav => (
            <List.Item active={active === nav}>
              <NavLink
                exact
                isActive={(match, location) => {
                  return location.pathname === `/${nav}`;
                }}
                activeClassName='active'
                to={nav}
                onClick={() => setActive(nav)}
              >
                {nav}
              </NavLink>
            </List.Item>
          ))}
        </List>
      </div>
      <Switch>
        {navList.map(id => (
          <Route path={`/${id}`}>
            <Child id={id} />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

function getDataById(id) {
  return data[id];
}

function Child({ id }) {
  const data = getDataById(id);
  return (
    <div className='ui container'>
      <header>
        <h1 className='ui header'>CoVid-19 Updates - {id}</h1>
        <small className='ui small'>Site updated: {updateTime} AEDT</small>
      </header>
      <ShareButton id={id} />
      <Page id={id} data={data} />
      <Divider />

      <DetailTable id={id} />

      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

const Page = ({ id, data }) => (
  <>
    <Summary id={id} data={data.todaySummarys} />

    {data.dailyHistorys.length > 5 && (
      <>
        <Divider />
        <Chart
          id={id}
          dailyHistorys={data.dailyHistorys}
          predicts={data.predicts}
        />
      </>
    )}
  </>
);

export default App;
