import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title, Button, Icon, Text, Body, Card, CardItem, Badge} from 'native-base';
import Dimensions from 'Dimensions';

import ActivityContentComponent from './ActivityContentComponent';
import ActivityExerciseComponent from './ActivityExerciseComponent';

// const width = parseInt(Dimensions.get('window').width);
const width = 350;

export default class ActivityListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selections: [],
    };
  }

  populateListContent = (content, i) => {
    return (
      <ActivityContentComponent
        key={i}
        index={i}
        content={content}
        selected={this.state.selections[i]}
        onActivityToggle={this.onActivityToggle}
      />
    )
  }

  populateExercises = (content, i) => {
    return (
      <ActivityExerciseComponent
        key={i}
        index={i}
        header={content}
        display={this.state.selections[i]}
      />
    );
  }

  onActivityToggle = (i, selected) => {
    let selections = this.state.selections;
    selections[i] = selected;
    this.setState({
      selections: selections
    });
  }

  showSelectedActivities = (i) => {
    return (
      <Text>{this.state.selections[i]}</Text>
    )
  }

  render() {
    return (
      <Card style={{ width: 350 }}>
        <CardItem header>
          <Text>{this.props.header}</Text>
        </CardItem>
        <CardItem>
          <Body>
            {this.props.contents.map(this.populateListContent)}
          </Body>
        </CardItem>
        {this.props.contents.map(this.populateExercises)}
      </Card>
    );
  }
}

ActivityListComponent.defaultProps = {};

const styles = StyleSheet.create({
  nonActive: {
    borderColor: '#D3DBE1',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  active: {
    backgroundColor: '#FB8023'
  },
  text: {
    color: 'black'
  }
});
