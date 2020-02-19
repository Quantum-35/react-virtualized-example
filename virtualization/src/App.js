import React from 'react';
import logo from './logo.svg';
import './App.css';
import loremIpsum from 'lorem-ipsum';
import { List } from 'react-virtualized';

class App extends React.Component {
  constructor() {
    super();
    const rowCount = 1000;
    this.list = Array(rowCount).fill().map((val, idx) => {
      return {
        id: idx,
        name: `JOHNE DONE${idx}`,
        image: 'http://via.placeholder.com/40',
        // text: loremIpsum({
        //   count: 1, 
        //   units: 'sentences',
        //   sentenceLowerBound: 4,
        //   sentenceUpperBound: 8 
        // })
      }
    })
  }

  renderRow = ({ index, key, style, isScrolling, isVisible, parent }) => {
    console.log('@@', index, key, style, isScrolling, isVisible, parent)
    return(
      <div key={key} style={style} className="row">
        <div className="image">
          <img src={this.list[index].image} alt="" />
        </div>
        <div className="content">
          <div>{this.list[index].name}</div>
          {/* <div>{item.text}</div> */}
        </div>
      </div>
    );
  }

  render() {
    const listHeight = 600;
    const rowWidth = 800;
    const rowHeight = 50;

    return (
      <React.Fragment>
        <div className="list">
          {/* {this.list.map(this.renderRow)} */}
          <List
            width={rowWidth}
            height={listHeight}
            rowHeight={rowHeight}
            rowRenderer={this.renderRow}
            rowCount={this.list.length}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
