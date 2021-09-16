import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Login } from '../Pages/Login'
import { Timeline } from '../Pages/Timeline'
import { Feedback } from '../Pages/Feedback'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/timeline" component={Timeline} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
    </BrowserRouter>
  )
}
