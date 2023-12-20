<!-- ## React router dom
- benifit of react router 
- pages can't be load 
- bandwidth less
- easy to build

## Web site link (https://v5.reactrouter.com/web/guides/quick-start)
```JavaScript
npm install react-router-dom

## Then import 
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
## After in app.js add it
    <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>    
``` -->