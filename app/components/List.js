import React, {Component} from 'react';
import {render} from 'react-dom';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  arrayMove,
} from 'react-sortable-hoc';

const DragHandle = SortableHandle(() => <span>#</span>); // This can be any component you want

const SortableItem = SortableElement(({item}) => {
  return (
    <li>
      <DragHandle />
      {item.link}
    </li>
  );
});

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <SortableItem key={`item-${index}`} index={index} value={item} />
      ))}
    </ul>
  );
});

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
    };
    this.onSortEnd = this.onSortEnd.bind(this);
  }
  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  }
  render() {
    console.log(this.state.items);
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} useDragHandle={true} />;
  }
}

/*
import React, {Component} from 'react';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  arrayMove,
} from 'react-sortable-hoc';

const DragHandle = SortableHandle(() => <span>::</span>); // This can be any component you want

const SortableItem = SortableElement(({value}) => {
  return (
    <li>
      <DragHandle />
      {value}
    </li>
  );
});

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});


export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    };
    this.onSortEnd = this.onSortEnd.bind(this);
  }
  onSortEnd({oldIndex, newIndex}){
    const {items} = this.state.items;

    this.setState({
      items: arrayMove(items, oldIndex, newIndex),
    });
  }
  render() {
    const {items} = this.state.items;
    return <SortableList items={items} onSortEnd={this.onSortEnd} useDragHandle={true} />;
  }
}*/
