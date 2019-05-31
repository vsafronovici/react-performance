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

  update = () => {
    this.forceUpdate()
  }

  render() {
    return <div className="demo1">
      <div className="control">
        <div className="control-item">
          <button onClick={this.update}>update</button>
        </div>
      </div>
      <div><FunctionalComponent x={1}/></div>
      <div><ClassComponent x={1}/></div>
    </div>
  }
}

