import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// import { withRouter, Route, Link, Switch } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import PropTypes from 'prop-types';

import Home from '../home';
import About from '../about';
import Contact from '../contact';
import NotFound from '../notfound';

const App = () => (
  <div className="nav">
    <header>
      <Link to="/" className="link_home">
        Home
      </Link>
      <Link to="/about" className="link_about">
        About
      </Link>
      <Link to="/contact" className="link_contact">
        Contact
      </Link>
    </header>

    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
);

export default App;

// const PageFade = props => (
//   <CSSTransition
//     {...props}
//     classNames="fadeTranslate"
//     timeout={1000}
//     mountOnEnter
//     unmountOnExit
//   />
// );
//
// const Layout = ({ children }) => (
//   <section>
//     <div className="nav">
//       <header>
//         <Link to="/" className="link_home">
//           Home
//         </Link>
//         <Link to="/about" className="link_about">
//           About
//         </Link>
//         <Link to="/contact" className="link_contact">
//           Contact
//         </Link>
//       </header>
//       {children}
//     </div>
//   </section>
// );
//
// const App = props => {
//   const locationKey = props.location.pathname;
//
//   return (
//     <Layout>
//       <TransitionGroup>
//         <PageFade key={locationKey}>
//           <Switch location={props.location}>
//             <main>
//               <Route exact path="/" component={Home} />
//               <Route exact path="/about" component={About} />
//               <Route exact path="/contact" component={Contact} />
//               <Route component={NotFound} />
//             </main>
//           </Switch>
//         </PageFade>
//       </TransitionGroup>
//     </Layout>
//   );
// };
//
// // App.propTypes = {
// //   location: PropTypes.string.isRequired,
// //   pathname: PropTypes.string.isRequired,
// // };
//
// // export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
// export default App;
