import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Body} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import ActivityListComponent from './ActivityListComponent';
//import MindfulnessPreviewComponent from './MindfulnessPreviewComponent';

export default class ActivitiesComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: [
        {header: "Life Gym", contents: ["Camel", "Sciatic Flossing", "Sitting Wobble", "Standing Wobble", "Wagging Tail", "Wall Lean", "Hamstring Strech", "Glut Strech", "Hip Flexor Strech", "Crufifix Wobble", "Crucifix Strech"]},
        {header: "Daily Gym", contents: ["10 Minute Session", "New 10 Minute Session"]},
        {header: "Mindfulness Meditation", contents: ["1 minute", "3 minute", "10 minute"]},
        {header: "Knowledge", contents: ["No.1", "No.2", "No.3", "No.4", "No.5", "Next Knowledge piece"]},
        {header: "Personal Choice", contents: ["cold pack", "osteopath", "Prescription", "self massage", "Massage"]},
      ]
    };
  }

  populateLists = () => {
    return this.state.options.map((option, i) => {
      return (
        <ActivityListComponent
          key={i}
          header={option.header}
          contents={option.contents}
        />
      );
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <Text>Activities</Text>
          {this.populateLists()}
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({});
