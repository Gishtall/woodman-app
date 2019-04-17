import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from "./components/header";
import ControlledCarousel from "./components/сarousel";
import Description from "./components/description";
import VideoBoxOne from "./components/video";
import VideoBoxTwo from "./components/videosecond";
import Map from './components/map';
import ContInfo from "./components/contacts";
import FormEntry from './components/form';
import Start from './components/start';
import Standard from './components/standard';
import Premium from './components/premium';
import Footer from "./components/footer";


const history = createBrowserHistory()


class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div className='wrapper'>
          <Head />
          <Container>
            <Row>
              <Col><Route exact path='/' component={ControlledCarousel}/></Col>
            </Row>
            <Row>
              <Col><Route exact path='/' component={Description}/></Col>
            </Row>
            <Row>
              <Col md={{ span: 6, offset: 3 }}><Route exact path='/' component={VideoBoxOne} videoId='kh4S11uHwk4'/></Col>
            </Row>
            <Row>
              <Col md={{ span: 6, offset: 3 }}><Route exact path='/' component={VideoBoxTwo} videoId='nvga5aQBFkA'/></Col>
            </Row>
            <Row>
              <Col><Route exact path='/contacts' component={ContInfo}/></Col>
            </Row>
            <Row>
              <Col><Route exact path='/contacts' component={Map}/></Col>
            </Row>
            <Row>
              <Col><Route exact path='/startpac' component={Start}/></Col>
            </Row>
            <Row>
              <Col><Route exact path='/standardpac' component={Standard}/></Col>
            </Row>
            <Row>
              <Col><Route exact path='/premiumpac' component={Premium}/></Col>
            </Row>
            <Row>
              <Col><Route exact path='/formentry' component={FormEntry}/></Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;