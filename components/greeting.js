export default function Greeting({user, gratitudes, hasSubmittedToday, isEmpty}) {
    return (
        <div>
            <h1 className ="text-primary text-4xl mb-2 pt-6 font-Abril tracking-wide">
                Hello, <span className="text-secondary underline"> {user.email}! </span>
            </h1>
            {   
                hasSubmittedToday ? (
                    <h2 className="text-primary text-4xl mb-2 font-Abril tracking-wide"> Today you're grateful for {gratitudes.slice(-1)[0].entry}</h2>
                ) : (
                    <h2 className="text-primary text-4xl font-bold mb-2 font-Abril tracking-wide">What are you grateful for today?</h2>
                )
            
            }
        </div>
    )
}