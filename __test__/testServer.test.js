'use strict';


const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const serverMethods = require('../server/testServer.js');




describe('The functionality of app', () => {
  it('Properly sets the socket username', () => {
    serverMethods.setUsername(socket, {
      username: 'Bob',
    });
    expect(socket.username).toBe(' Bob');
  });


  it('The app is set language', () => {
       serverMethods.setLanguage(socket, {})
      })
    });
  



// const setUsername = (socket, data) => {
//     socket.username = ` ${data.username}`;
//     userGroup[socket.id] = ` ${socket.username}`;
//   };