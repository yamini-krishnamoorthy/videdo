import React, { Component } from 'react';
import { StyleSheet, Image, View} from 'react-native';
import { Header, Title, Button, Icon, Text, Left, Right, Body, Card, CardItem} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

const ActivityExerciseComponent = (props) => {

  return (
    <CardItem>
      {props.display ? (
        <Card>
        <CardItem >
          <Text>{props.header}</Text>
        </CardItem>
        <CardItem cardBody>
          <Image style={{ resizeMode: 'cover' }} source={require('./img.png')} />
        </CardItem>
        <CardItem >
          <Button>
            <Icon name="ios-volume-up"/>
          </Button>
          <Button>
            <Icon name="ios-play"/>
          </Button>
          <Button>
            <Icon name="ios-help"/>
          </Button>
        </CardItem>
        </Card>
      ) : (
        null
      )}
    </CardItem>
  );
}

ActivityExerciseComponent.defaultProps = {};

const styles = StyleSheet.create({
});

export default ActivityExerciseComponent;
