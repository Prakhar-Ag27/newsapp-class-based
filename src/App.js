import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <Router>
          <LoadingBar color="#f11946" height={3} progress={this.state.progress} />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                  apiKey = {this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={6}
                  country="in"
                  category="science"
                  apiKey = {this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={6}
                  country="in"
                  category="business"
                  apiKey = {this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={6}
                  country="in"
                  category="entertainment"
                  apiKey = {this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={6}
                  country="in"
                  category="sports"
                  apiKey = {this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={6}
                  country="in"
                  category="technology"
                  apiKey = {this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={6}
                  country="in"
                  category="health"
                  apiKey = {this.apiKey}
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
