"use client";
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

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

 function Home(props) {
  
  return (
    <Layout>
    <MeetupList meetups={DUMMY_MEETUPS}/>
    </Layout>
  )
}
// export async function getServerSideProps(context){
//   const req=context.req;
//   const res=context.res;
//   //fetch data from api

//   return {
//     props:{
//       meetups:DUMMY_MEETUPS
//     }
//   }
// }
// export async function getStaticProps(){
//   //fetch data from api
//     return {
//       props:{
//         meetups:DUMMY_MEETUPS
//       },
//       revalidate:1
//     }

// }
export default Home;