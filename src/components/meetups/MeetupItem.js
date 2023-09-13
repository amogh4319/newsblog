
"use client"
import Link from 'next/link';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const showDetails=()=>{
    console.log('clicked');
    console.log(props._id)
  }
 
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button><Link href={`/${props._id}`}onClick={showDetails}>Show Details</Link></button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
