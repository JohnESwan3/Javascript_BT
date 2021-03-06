const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  recieve: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const Chatroom = function () {
  let users = {}; // List of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        //   Single user message
        to.recieve(message, from);
      } else {
        //   Mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    },
  };
};

const john = new User('John');
const brad = new User('Brad');
const sara = new User('Sara');

const chatroom = new Chatroom();

chatroom.register(john);
chatroom.register(brad);
chatroom.register(sara);

john.send('Hello Brad', brad);
sara.send('Hello John, good website', john);
brad.send('Hello Everyone');
