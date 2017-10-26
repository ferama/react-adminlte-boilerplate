import React from 'react'
import Content from '../../components/Content'
import ContentHeader from '../../components/ContentHeader'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

import {
    startTest,
} from '../../modules/test'

class Test extends React.Component {
    onTest() {
      this.props.startTest("https://facebook.github.io/react-native/movies.json")
    }
    render() {
        let props = this.props
        let title = ""
        if (this.props.data != null) {
          title = this.props.data.title + ". " + this.props.data.description
        }
        return (
            <div>
              <ContentHeader title="Test Page" subtitle="with redux demo" />
              <Content>
                <p>Count: {props.count}</p>
                <p>Async data output: {title}</p>
                <p>
                  <button onClick={this.onTest.bind(this)}  disabled={props.isTesting}>Async Network Request Demo</button>
                </p>
                <p>
                  <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
                  <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async (+3)</button>
                </p>

                <p>
                  <button onClick={props.decrement} disabled={props.isDecrementing}>Decrement</button>
                  <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
                </p>

                <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
              </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
  isTesting: state.test.isTesting,
  data: state.test.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  startTest,
  changePage: () => push('/about-us')
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)
