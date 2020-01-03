import React,{Component} from 'react';
class Book extends Component
{
    render()
    { 
      const {id,img,title,author}=this.props.info;
      const {deleteitem}=this.props;
       return( 
       <div className='book'>
       <img src={img} height='150px' width='150px'/> 
       <h2>{title}</h2>
       <h3>by {author}</h3>
       
       <button onClick={()=>{deleteitem(id)}}> Click Here </button>
       </div>); 
    }
}


 export default Book;
