"use client";
import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import Head from "next/head";
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
    return(<Fragment>
        <Layout>
            <Head>
                <title>Add new meetup</title>
                <meta 
                name='description'
                content='add new meeting and visit the possible meetups'
                />
            </Head>
        <NewMeetupForm onAddMeetup={meetupHandler}/>
        </Layout>
        </Fragment>
    )
}
export default NewMeetupPage;