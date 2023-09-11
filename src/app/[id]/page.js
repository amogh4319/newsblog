
const DUMMY_MEETUPS=[
    {
      id:1,
      title:'First meetup',
      image:'https://i.pinimg.com/originals/67/58/c6/6758c60833751880c2accfb70e84bb55.jpg',
      description:'this is my first meeting place',
      address:'Road no 4,guttenberg street,Rome'
    },
    {
      id:2,
      title:'Second meetup',
      image:'https://thumbs.dreamstime.com/b/madrid-spain-september-beautiful-historical-building-old-architecture-city-center-copy-space-text-105480199.jpg',
      description:'this is my second meeting place',
      address:'Road no 10,albert enstien street,Spain'
    }
  ]
  
function meetupDetails({params}){
    const id=params.id;
    const Details=DUMMY_MEETUPS.find((item)=>item.id===parseInt(id))
    return (
        <div style={{textAlign:'center'}} className="mt-5">
            <img src={Details.image} alt={Details.title} height={'500px'} width={'500px'}/>
            <h1>{Details.title}</h1>
            <p>{Details.description}</p>
            <address>{Details.address}</address>
            
        </div>
    )
}
export default meetupDetails;