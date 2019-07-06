import React from 'react';
import './book-list-item.css';
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

class BookListItem extends React.Component {

    state = {
        bookData: this.props
    }

    componentDidUpdate = (oldProps, oldState) => {
        if ( oldProps!==this.props )  {
            this.setState({bookData: this.props});
        }
      };

    componentWillReceiveProps = (newProps) => {
        // console.log("MobileClient id="+newProps.book.id+" componentWillReceiveProps");
      };

    render() {
        const { select, book, onAddedToCart } = this.state.bookData;
        const { title, authors, price, thumbnailUrl } = book;

        // console.log('render: Book id=' + book.id);

        return (
            <ListGroup.Item  className={ select ? 'book-list-item book-select' :  'book-list-item'} >
                <div className='book-cover'>
                    <img src={thumbnailUrl} alt={'cover'}/>
                </div>
                <div className={'book-details'}>
                    <span className='book-title'>{title}</span>
                    <div className='book-author'>{authors}</div>
                    <div className='book-price'>{price}</div>
                    <Button onClick={onAddedToCart} variant="info">Add to cart</Button>
                </div>
            </ListGroup.Item>
        )
    }
}


export default BookListItem;