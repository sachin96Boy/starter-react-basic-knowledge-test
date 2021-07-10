import './Card.css';

const Card = (props: any)=> {

    return(
        <div className="Card" style={{ backgroundColor: "yellow" }}>
              {props.children}
        </div>
    );
    
};

export default Card;