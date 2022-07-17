import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import { Switch, Route } from 'react-router-dom'
import Main from "./pageComponents/Main";
import SkillsPage from "./pageComponents/SkillsPage";
import AboutPage from "./pageComponents/AboutPage";
import WorkPage from "./pageComponents/WorkPage";
import ContactPage from "./pageComponents/ContactPage";


function App() {
  return (
    <>
    <GlobalStyle/>
      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/about' component={AboutPage}/>
          <Route exact path='/skills' component={SkillsPage}/>
          <Route exact path='/works' component={WorkPage}/>
          <Route exact path='/contact' component={ContactPage}/>
        </Switch> 
      </ThemeProvider>
    </>
  );
}

export default App;
