import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';

export default class Project extends Component {


  render() {

        return <Card style={{marginTop:20,marginBottom:10,padding:15,textAlign:"center"}}>
                    <div>This is PROJECT</div>
                     {this.props.children}
              </Card>
  }
}
