
import Book from "./components/Book"
import './App.css'



const App  = () => {

    const books = [
        {
          id: 1,
          image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000061917.jpg.webp",
          title: "Harry Potter a Kameň mudrcov"
        },
        {
          id: 2,
          image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/333420609/10.jpg.webp",
          title: "Harry Potter a Tajomná komnata"
        },
        {
          id: 3,
          image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-vezen-z-azkabanu-9788000063393.jpg.webp",
          title: "Harry Potter a Vezeň z Azkabanu"
        },
      ]

    return (
        <div className="all-books">
            <Book image={books[0].image} title={books[0].title}/>
            <Book image={books[1].image} title={books[1].title}/>
            <Book image={books[2].image} title={books[2].title}/>
        </div>
    )
}
export default App