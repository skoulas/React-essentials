import React from 'react' ;
import './App.css';

function Header () {
  return (
  <header>
    <h1> Eve Kitchen </h1>
  </header>
    );
}
function Main () {
  return (
    <section>
      <p> We are all bill masters</p>
    </section>
  )
}
function Footer () {
  return (
    <footer>
      <p>YEEEEEES</p>
    </footer>
  )

}

function App() {
  return (
    <div className="App">
     <Header />
     <Main />
     <Footer />
    </div>
  );
}

export default App;
