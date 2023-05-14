// MessageParser starter code
// when user writes information that informaiton is carried to the message parser
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    // inside this message parser we have access to the action provider
    this.state = state;
    //this.parse("Hi")
    // state carried to action provider
  }
  // takes in the message and console logs the message typed by the user

  parse(message) {
    console.log(message)
    console.log(this.state)
    //message is the prop/state of the app
    const lowercase = message.toLowerCase()
    this.actionProvider.businessDataHandler(lowercase);

    // if (lowercase.includes('hi')) {
    //   this.actionProvider.helloworldHandler(lowercase)
    // }

    // if (lowercase.includes('todos')) {
    //   this.actionProvider.todosHandler(lowercase);
    // }

    // if (lowercase.includes('all')) {
    //   this.actionProvider.businessDataHandler(lowercase);
    // }
  }
}

export default MessageParser;

