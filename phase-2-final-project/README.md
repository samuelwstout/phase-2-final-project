# Chicago Deep Dish Finder

Flatiron School Phase 2 (React) Project

## Description

An explanation of the web app and its code is in this video: 

[![IMAGE_ALT](https://img.youtube.com/vi/I6GIBKT3CBY/0.jpg)](https://youtu.be/I6GIBKT3CBY)

Chicago Deep Dish Finder is a restaurant locator exclusively for restaurants that serve deep dish pizza. There are three routes: map(/), list(/list), and add(/add). Mapbox GL JS, an external map API, is incorporated in the map page. For the list of restaurants, I used json-server as a mock backend for GET (list page) and POST (add page) requests. 

To know how to add interactive points to a Mapbox map specifically in React, refer to this [blog post](https://medium.com/@samuelwstout/222529725367).

![](https://media.giphy.com/media/5KjYBf1iMXHVEx1oNK/giphy.gif)

## Installation

Install [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html). 

```bash
% create-react-app my-app
cd my-app
npm start
```
Install [json-server](https://www.npmjs.com/package/json-server).

```bash
% npm install -g json-server
```
Create a db.json file with some data.

```bash
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```
Start JSON Server.

```bash
% json-server --watch db.json
```
If running json-server from a different port (like in my case, 3001):

```bash
% json-server --p 3001 --watch db.json
```