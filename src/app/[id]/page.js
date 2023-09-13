"use client"
import Head from "next/head";
import React, { useState, useEffect, Fragment } from "react";

export default function Page({ params }) {
  const [meetupDetails, setMeetupDetails] = useState(null); // Initialize as null
  console.log(params);

  useEffect(() => {
    async function fetchMeetupData() {
      try {
        const response = await fetch('/api/newmeetup');
        console.log(response);
        if (!response.ok) {
          throw new Error('Meetup not found');
        }
        const data = await response.json();
        console.log(data);

        // Use Array.find to find the meetup by _id
        const meetupData = data.find((meetupdata) => meetupdata._id === params.id);

        console.log(meetupData);
        setMeetupDetails(meetupData);
      } catch (error) {
        console.error('Error fetching meetup details:', error);
        // Handle errors or display a message here
      }
    }

    if (params.id) {
      // Ensure params.id is defined before making the fetch request
      fetchMeetupData();
    }
  }, [params.id]); // Include params.id as a dependency

  // Render a loading message while data is being fetched
  if (!meetupDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
        <Head>
            <title>{meetupDetails.title}</title>
            <meta name='description' content={meetupDetails.description}/>
        </Head>
    <div style={{textAlign:'center'}}>
      <h2>Meetup Details</h2>
      <div>
        <img src={meetupDetails.image} alt={meetupDetails.title} height={'500px'} width={'500px'}/>
        <h3>{meetupDetails.title}</h3>
        <p><i>{meetupDetails.description}</i></p>
        <p>{meetupDetails.address}</p>
        
      </div>
    </div>
    </Fragment>
  );
}
