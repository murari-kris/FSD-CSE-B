import React from 'react'
import Book from './components/Book'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <>
   <Header/>
    <div className='booklist'>
      

      <Book/>
      
      
      <Book/>
      
      <Book/>

      
      
    </div>
    <Footer/>
    </>
    
  )
}

export default App
