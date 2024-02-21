// App.jsx
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login.jsx';
import Chnag from './chnag.jsx';
import Forget from './forget.jsx';
import Reset from './reset.jsx';
import Hee from './hee.jsx';
import Upload from './upload.jsx';
import ShowImage from './showImage.jsx';
import Test from './test.jsx';
import Fertilizer from './insert_Fertilizer.jsx';
// const navigateTo = useNavigate();
// navigateTo('Login')
// navigateTo('Chnag')
// navigateTo('Forget')
// navigateTo('Reset')
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/chnag" component={Chnag} />
        <Route path="/forget" component={Forget} />
        <Route path="/reset" component={Reset} />
        <Route path="/upload" component={Upload} />
        <Route path="/showImage" component={ShowImage} />
        <Route path="/test" component={Test} />
        <Route path="/insert_Fertilizer" component={Fertilizer} />
        {/* The default route, e.g., for http://localhost:5173/App */}
        <Route path="/" component={Hee} />
      </Switch>
    </Router>
  );
}

export default App;
