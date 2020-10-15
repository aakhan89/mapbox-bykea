import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import mapboxgl from "mapbox-gl";
const { REACT_APP_MAPBOX_CODE } = process.env;
mapboxgl.accessToken = REACT_APP_MAPBOX_CODE;
console.log(mapboxgl.accessToken);


class App extends Component {
  // Code from the next few steps will go here
  constructor(props) {
    super(props);
    this.state = {
      lng: 67.0011,
      lat: 24.8609,
      zoom: 14,
    };
  }

  getCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  setPosition = (position) => {
    const { latitude, longitude, accuracy } = position.coords;
    const zoom = 15;
    console.log("Latitude: " + latitude + " Longitude: " + longitude);
    console.log(`More or less ${accuracy} meters.`);

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [longitude, latitude],
      zoom: zoom,
    });
    this.setState({
      latitude,
      longitude,
      zoom,
    });
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  };
  async componentDidMount() {
    await this.getCurrentLocation();
  }
  render() {
    let classTab = "activeTab content_Tab tabShadow";
    return (
      <Container className="App" fluid>
        <Header></Header>
        <Row>
          <Col className="left_content">
            <Row>
              <Col className="content_Tab tabShadow">Details</Col>
              <Col className={classTab}>TimeLine</Col>
              <Col className="content_Tab tabShadow">Agent Notes</Col>
            </Row>
          </Col>
          <Col>
            <Row
              ref={(el) => (this.mapContainer = el)}
              className="right_content mapContainer"
            >
              <div className="sidebarStyle">
                <div>
                  Longitude: {this.state.lng} | Latitude: {this.state.lat} |
                  Zoom: {this.state.zoom}
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
