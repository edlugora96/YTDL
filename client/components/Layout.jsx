import React from "react";
import ReactDOM from "react-dom";
import { Preview } from "$react/Preview";
import CSSTransition from "react-addons-css-transition-group";
import connect from "$redux/connect";
import "$styles/animations.css";

export const Layout = connect(
  class Lay extends React.Component {
    render() {
      const { components, modal = {} } = this.props;
      return (
        <div className="layout">
          {process.browser &&
            modal.status &&
            ReactDOM.createPortal(
              <Preview>
                <modal.component />
              </Preview>,
              document.getElementById("modal")
            )}
          <div className="main">
            {components.Navbar && <components.Navbar />}
            {components.Header && <components.Header />}
            {components.Body && (
              <CSSTransition
                transitionName="fade"
                transitionLeave={false}
                transitionEnterTimeout={1000}
                // transitionLeaveTimeout={1000}
              >
                <components.Body {...this.props} key={this.props.users} />
              </CSSTransition>
            )}
            {components.Footer && <components.Footer />}
          </div>
          <style jsx>{``}</style>
        </div>
      );
    }
  }
);
