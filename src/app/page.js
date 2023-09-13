"use client";
import { Fragment } from "react";
import  Head  from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import React,{useState,useEffect} from "react";



 function Home(props) {

  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function fetchMeetups() {
      try {
        const response = await fetch('/api/newmeetup'); 
        console.log(response);// Adjust the API endpoint
        const data = await response.json();
        console.log(data);
        setMeetups(data);
      } catch (error) {
        console.error('Error fetching meetups:', error);
      }
    }

    fetchMeetups();
  }, []);


  return (
    <Fragment>
      
    <Layout>
    <Head>
        <title>React meetups</title>
      </Head>
    <MeetupList meetups={meetups}/>
    </Layout>
    </Fragment>
  )
}

export default Home;