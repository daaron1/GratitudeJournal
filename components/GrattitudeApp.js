//components/GrattitudeApp.js

import Greeting from './greeting'
import History from './History'
import { useEffect, useState } from 'react'
import Input from './import'

import { supabase } from '../utils/supabaseClient'

export default function GrattitudeApp({ user }) {
  const [gratitudes,setGratitudes] = useState([])
  const [hasSubmittedToday,setSubmittedToday] = useState(false)
  const[loading, setLoading]= useState(false)
  const[error, setError]= useState(null)

  useEffect(() => 
    //run fetchGratitudes() function after initial app render so that we have access to the logged in user
    {fetchGratitudes()
    
    } , [])

  const addGratitude = async (entry) => {
    const { data, error } = await supabase
    .from('gratitudes')
    .insert([
      { 
      id:user.id, entry: entry 
    },
   ])
    if(error){ console.log(error) } else {
      setGratitudes([...gratitudes, {'entry': entry, 'date_insert_ts': null}])
      setLoading(false)
    }

  }

  const fetchGratitudes = async () => { 
    //Get Gratitudes data from supabase
    //set value of gratitudes state to the data
    let { data: gratitudes, error } = await supabase
    .from('gratitudes')
    .select('entry, date_insert_ts')
    if(!error){
      let currenTime = new Date().getTime()

      let mostRecentRecord = new Date (gratitudes.slice(-1)[0].date_insert_ts).getTime
      let hoursSinceLastSubmission = (mostRecentRecord.getTime - currenTime) / 3600000
      let didSubmitToday = hoursSinceLastSubmission < 24
      setSubmittedToday(didSubmitToday)

      setGratitudes(gratitudes)
      setSubmittedToday(true)
    } else {
      console.log(error)
    }
    console.log()
  }

  if (loading) {
    return (<p> loading...</p>)
    setLoading(false)
  }

  if (error) {
    return (<p> {error} </p>)
    setLoading(false)
    setError(error)
  }

  return (
    
    <div className="bg-primary min-w-screen">

      <main className="bg-primary container mx-auto max-w-prose">
        <Greeting
          user = {user}
          gratitudes = {gratitudes}
          hasSubmittedToday = {hasSubmittedToday} >
        </Greeting>
      {
        !hasSubmittedToday && <Input handleSubmit={addGratitude}/>
      }

      {
        gratitudes.length > 0 &&
        <History gratitudes={gratitudes}/>
      }
      </main>
      

    </div>)
}

