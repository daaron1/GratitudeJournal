import Head from 'next/head'

import { useState } from 'react'
import Input from '../components/import'
import GrattitudeApp from '../components/GrattitudeApp'
import Greeting from '../components/greeting'
import History from '../components/History'
import { Auth } from '@supabase/ui'
import { supabase } from '../utils/supabaseClient'


export default function Home(){

  const { user } = Auth.useUser()

  return (
    <div className="bg-primary min-h-screen min-w-screen">
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
        
      </Head>

      <main className="bg-primary container mx-auto max-w-prose">
        {user ? (
          <div>
          <GrattitudeApp user = {user} /> 
          <button onClick = {async() => {const { error } = await supabase.auth.signOut()
            if(error){console.log(error) }}} className="text-gray-50 bg-gray-300 m-10 px-5 py-1 rounded-full">Logout</button>
          </div>
        ) : (
        
        <div className = "bg-primary">
          <Auth supabaseClient = {supabase} socialLayout= "horizontal" socialButtonSize = "xlarge"> </Auth>
        </div>
        )}
       
      </main>
      

    </div>)
}

  

