import React from 'react'
import { Content, LoggedFooter, LoggedHeader, NotLoggedFooter, NotLoggedHeader } from './ComponentsDemo1'

export class Demo1 extends React.Component {

  state = {
    logged: false
  }

  toggleChange = e => {
    this.setState({
      logged: !this.state.logged
    })
  }

  badRendering = () => {
    if (this.state.logged) {
      return <div>
        <LoggedHeader />
        <Content />
        <LoggedFooter/>
      </div>
    } else {
      return <div>
        <Content />
        <NotLoggedFooter/>
      </div>
    }
  }

  alsoBadRendering = () => {
    return this.state.logged ? (
      <div>
        <LoggedHeader />
        <Content />
        <LoggedFooter/>
      </div>
    ) : (
      <div>
        <Content />
        <NotLoggedFooter/>
      </div>
    )
  }

  alsoBadRendering2 = () => {
    if (this.state.logged) {
      return <div>
        {[
          <LoggedHeader />,
          <Content />,
          <LoggedFooter/>
        ]}
      </div>
    } else {
      return <div>
        {[
          <Content />,
          <NotLoggedFooter/>
        ]}
      </div>
    }
  }


  goodRendering = () => {
    return <div>
      {this.state.logged && <LoggedHeader />}
      <Content />
      {this.state.logged && <LoggedFooter />}
      {!this.state.logged && <NotLoggedFooter />}
    </div>
  }

  equivalentToGoodRendering = () => {
    if (this.state.logged) {
      return <div>
        {[
          <LoggedHeader />,
          <Content />,
          <LoggedFooter />
        ]}
      </div>
    } else {
      return <div>
        {[
          false, // undefined, null
          <Content/>,
          <NotLoggedFooter/>
        ]}
      </div>
    }
  }


  alsoGoodRendering = () => {
    if (this.state.logged) {
      return <div>
        {[
          <LoggedHeader key="a"/>,
          <Content key="b"/>,
          <LoggedFooter key="c"/>
        ]}
      </div>
    } else {
      return <div>
        {[
          <Content key="bv"/>,
          <NotLoggedFooter key="d"/>
        ]}
      </div>
    }
  }



  render() {
    console.log('Demo1', this.state)

    return <div className="demo1">
      <div className="control">
        <div className="control-item">
          <input type="checkbox" defaultChecked={this.state[1]} onChange={this.toggleChange}/> <b>user logged</b>
        </div>
      </div>
      {/*{this.badRendering()}*/}
      {/*{this.alsoBadRendering()}*/}
      {/*{this.alsoBadRendering2()}*/}
      {/*{this.goodRendering()}*/}
      {/*{this.equivalentToGoodRendering()}*/}
      {this.alsoGoodRendering()}
    </div>
  }
}

