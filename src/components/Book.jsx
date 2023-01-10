import "./Book.css"
import OrderButton from "./OrderButton"

const Book = (props) => {
    return ( 
        <div className="one-book">
        <h2 className="book-name">{props.title}</h2>
        <img src={props.image} alt="book name" />
        <p>lLorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla pretium odio nec interdum. 
        Cras et est risus. Morbi tristique ligula sit amet lectus auctor, sed egestas leo laoreet. Mauris luctus ligula ut pharetra sollicitudin.
         Nulla a lectus sapien. Suspendisse mi justo, cursus at est sit amet, dictum convallis tellus.</p>
         
        <OrderButton />
        </div>
    )
}

export default Book;