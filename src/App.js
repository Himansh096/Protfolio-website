import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { LightTheme, DarkTheme } from "./components/Themes"
import { Route, Switch } from "react-router"
import Main from "./components/Main"
import BlogPage from "./components/BlogPage"
import AboutPage from "./components/AboutPage"
import Workpage from './components/WorkPage'
import MySkillsPage from "./components/MySkillsPage"
import SoundBar from "./subcomponents/SoundBar"

function App() {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={LightTheme}>
      <SoundBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/work" component={Workpage} />
        <Route path="/skills" component={MySkillsPage} />
      </Switch>

    </ThemeProvider>

  </>

}

export default App

