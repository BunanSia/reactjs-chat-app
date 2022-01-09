import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from "./components/ChatFeed"
const App=()=>{
    return(
        <ChatEngine
            height="100vh"
            projectID="974b097f-d664-4203-9257-b94b3a135b85"
            userName="Bunan"
            userSecret="bunan123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />);
}

export default App;