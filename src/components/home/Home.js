import React from 'react'
import { Link } from 'react-router-dom'

import log from '../../helpers/log'
import MainContent from '../common/MainContent'
import HomeProjects from './HomeProjects'
import CreateIssueLink from '../user-requests/add-project/CreateIssueLink'
import Intro from './Intro'
import TagList from './TagList'
import Spinner from '../common/Spinner'

const Home = props => {
  log('Render the <Home> component', props)
  const { isLoggedin, pending, authActions, popularTags } = props
  return (
    <MainContent>
      <section className="no-card-container">
        <Intro />
      </section>
      <section>
        <h3 className="no-card-container" style={{ margin: '0rem 0 2rem' }}>
          <span className="icon mega-octicon octicon-flame" />
          Today Hot Projects
          <span
            className="counter"
            style={{ fontSize: '1rem', color: '#aaa', marginLeft: '.5rem' }}
          >
            (by number of stars added yesterday)
          </span>
        </h3>
        {!pending ? <HomeProjects {...props} /> : <Spinner />}
      </section>
      <section>
        <div className="no-card-container">
          <h3 className="with-comment" style={{ margin: '0 0 1rem' }}>
            Find the <i className="special">best</i> components to build amazing
            web applications!
          </h3>
          <p>
            View <Link to="/projects">ALL PROJECTS</Link> or check one of the
            popular tags:
          </p>
          {!pending > 0 ? <TagList tags={popularTags} /> : <Spinner />}
        </div>
      </section>
      <section>
        <MoreProjects
          handleClick={authActions.login}
          isLoggedin={isLoggedin}
          pending={pending}
        />
      </section>
    </MainContent>
  )
}

const MoreProjects = () => {
  return (
    <div className="no-card-container">
      <h3 className="with-comment" style={{ marginBottom: '0.5rem' }}>
        Do you want more projects ?
      </h3>
      <CreateIssueLink showAsButton className={`button-outline block`}>
        <span className="octicon octicon-mark-github" /> Create an issue on
        GitHub
      </CreateIssueLink>
    </div>
  )
}

export default Home
