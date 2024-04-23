import React from 'react';
import './App.css'; // This is your global styles
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import './Login.css'; // This is your specific login styles

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator hideDefault>
      {({ signOut, user }) => (
        <div className="App">
          <header className="App-header">
            <h1>Welcome, {user?.username}</h1>
            <button onClick={signOut}>Sign Out</button>
            <h2>My App Content</h2>
            <div className="login-container">
              {/* ... rest of your code */}
            </div>
          </header>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
