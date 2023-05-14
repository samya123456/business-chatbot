// ActionProvider starter code
//implement methods and send response to the user
// message parser takes the message and the action provider responds
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  //action that we can use in the messageParser -- response to the user
  helloworldHandler = (question) => {
    const message = this.createChatBotMessage("This is a good Question " + question)
    alert(message)
    this.setChatbotMessage(message)
  }

  businessDataHandler = async (question) => {
    this.callApi(question)

  }

  callApi = async (question) => {
    let query = { question }
    console.log(JSON.stringify(query))
    fetch("http://localhost:8000/query", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(query)
    }).then((result) => {

      result.json().then((resp) => {
        console.log(JSON.stringify(resp))
        alert(resp.answer)
        const message = this.createChatBotMessage(resp.answer)
        this.setChatbotMessage(message)

      })
    })
  }

  todosHandler = () => {
    const message = this.createChatBotMessage("Sure. Here's your todos", {
      widget: "todos",
    })
    this.setChatbotMessage(message);
  }

  //method to allow to add chatbot message to the state of the app
  setChatbotMessage = (message) => {
    this.setState(state => ({ ...state, messages: [...state.messages, message] }))
  }
}

export default ActionProvider;