import React from "react";

//npx create-react-app my-app --template typescript

export function deneme(message: string): string {
  return `${message} bir mesajdır.`;
}

function App() {
  return (
    <div className="App">
      <p>{deneme("bu yazı")}</p>
    </div>
  );
}

export default App;
