import Income from "./COMPONENTS/Income"
import Cost from './COMPONENTS/Cost'
import Balance from './COMPONENTS/Balance'
import Storage from "./COMPONENTS/Storage"
import Rates from "./COMPONENTS/Rates"
import Sources from "./COMPONENTS/Sources"
import Todos from "./COMPONENTS/Todos"
import eugeva from './IMAGES/eugeva.jpeg'
import { AppContextProvider } from "./STATE"
import SocialMedia from "./COMPONENTS/SocialMedia"
import AllInteractions from "./COMPONENTS/AllInteractions"
function App() {
  return (
    <AppContextProvider>
      <nav className="uk-navbar-container" uk-navbar="true" style={{ backgroundColor: 'rgba(48,55,106,1)' }}>
        <div className="uk-navbar-left">
          <a href="logo" className="uk-navbar-item uk-logo">
            <div className="uk-width-auto uk-margin-left uk-flex uk-flex-middle">
              <img className="uk-border-circle" width="48" height="48" alt="user" src={ eugeva }></img>
              <div className="uk-margin-left">
                <div className="uk-text-bold uk-text-default" style={{ color: "white" }}>Eugene Van Zyl</div>
                <div className="uk-text-small">eugevanz@gmail.com</div>
              </div>
            </div>
          </a>
        </div>
      </nav>
      <div className="uk-flex uk-flex-wrap uk-flex-wrap-around uk-flex-top">
        <div className="uk-width-3-4@l uk-flex uk-flex-wrap uk-flex-wrap-around">
          <Income></Income>
          <Cost></Cost>
          <Balance></Balance>
          <div className="uk-flex uk-flex-wrap uk-flex-wrap-around">
            <Rates></Rates>
            <div className="uk-flex uk-flex-wrap uk-flex-wrap-around uk-width-3-5@m uk-margin-large-bottom">
              <Sources></Sources>
              <div className="uk-flex uk-flex-wrap uk-flex-wrap-around">
                <SocialMedia></SocialMedia>
              </div>
            </div>
            <div className="uk-width-2-5@m">
              <Todos></Todos>
            </div>
          </div>
        </div>
        <div className="uk-width-1-4@l uk-width-expand@s">
          <Storage></Storage>
          <AllInteractions></AllInteractions>
        </div>
    </div>
    </AppContextProvider>
  )
}
export default App;
