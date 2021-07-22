import Income from "./COMPONENTS/Income"
import Storage from "./COMPONENTS/Storage"
import Rates from "./COMPONENTS/Rates"
import Sources from "./COMPONENTS/Sources"
import Social from "./COMPONENTS/Social"
import Interactions from "./COMPONENTS/Interactions"
function App() {
  return (
    <>
      <nav className="uk-navbar-container" uk-navbar="true" style={{ backgroundColor: 'rgba(48,55,106,1)' }}>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="Active">Active</a></li>
            <li>
              <a href="Parent">Parent</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li className="uk-active"><a href="Active">Active</a></li>
                  <li><a href="Item">Item</a></li>
                  <li><a href="Item">Item</a></li>
                </ul>
              </div>
            </li>
            <li><a href="Item">Item</a></li>
          </ul>
        </div>
      </nav>
      <div className="uk-flex uk-flex-wrap uk-flex-wrap-around uk-flex-top">
        <div className="uk-width-3-4@l uk-flex uk-flex-wrap uk-flex-wrap-around">
          <Income></Income>
          <Income></Income>
          <Income></Income>
          <div className="uk-flex uk-flex-wrap uk-flex-wrap-around">
            <div className="uk-flex uk-flex-wrap uk-flex-wrap-around uk-width-2-5@m">
              <Sources></Sources>
              <div className="uk-flex uk-flex-wrap uk-flex-wrap-around">
                <Social></Social>
                <Social></Social>
              </div>
            </div>
            <div className="uk-width-3-5@m">
              <Rates></Rates>
              <div className="uk-card uk-card-body">
                <h3 className="uk-card-title">Default</h3>
                <p>Lorem ipsum <a href="#dolor">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-width-1-4@l uk-width-expand@s">
          <Storage></Storage>
          <Interactions></Interactions>
          <Interactions></Interactions>
          <Interactions></Interactions>
        </div>
    </div>
    </>
  )
}
export default App;
