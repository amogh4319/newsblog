"use client";
import Layout from "../../components/layout/Layout";
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
function NewMeetupPage(){
    const meetupHandler = (enteredMeetupData) => {
        fetch('/api/newmeetup', {
          method: 'POST',
          body: JSON.stringify(enteredMeetupData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error(error);
          });
      }
    return(
        <Layout>
        <NewMeetupForm onAddMeetup={meetupHandler}/>
        </Layout>
    )
}
export default NewMeetupPage;