import React from 'react'

const C2 = props => {
  console.log(`C2 render`, props)
  return <div>C2</div>
}

const FunctionalComponent = props => {
  console.log(`FunctionalComponent render`, props)
  return <div>Functional Component <C2 x={1}/></div>
}

class ClassComponent extends React.Component {
  render() {
    console.log(`${this.constructor.name} render`, this.props)
    return <div>Class Component <C2 x={1}/></div>
  }
}


export class Demo3 extends React.Component {

  state = {
    logged: false
  }

  toggleChange = e => {
    this.setState({
      logged: !this.state.logged
    })
  }

  update = () => {
    this.forceUpdate()
  }




  render() {
    console.log('Demo3', this.state)

    return <div className="demo1">
      <div className="control">
        <div className="control-item">
          <input type="checkbox" defaultChecked={this.state[1]} onChange={this.update}/> <b>user logged</b>
        </div>
      </div>
      <div><FunctionalComponent x={1}/></div>
      <div><ClassComponent x={1}/></div>
    </div>
  }
}

