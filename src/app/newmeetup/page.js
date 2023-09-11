"use client";
import Layout from "../../components/layout/Layout";
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
function NewMeetupPage(){
    const meetupHandler=(enteredMeetupData)=>{
        console.log(enteredMeetupData);
    }
    return(
        <Layout>
        <NewMeetupForm onAddMeetup={meetupHandler}/>
        </Layout>
    )
}
export default NewMeetupPage;