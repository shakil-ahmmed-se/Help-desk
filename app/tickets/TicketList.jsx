import Link from "next/link";

async function getTickets() {

  await new Promise(resolve => setTimeout(resolve, 2000))

  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 60 
    }
  })
  const data = await res.json()
  return data
}

export default async function TicketList() {
    // Fetch data from your API
    const tickets = await getTickets();

  return (
    <>
      {
        tickets.map((ticket) =>(   
          <div key={ticket.id} className='card my-5'>
            <Link href={`tickets/${ticket.id}`}>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice( 0, 200) }...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} Priority
              </div>
            </Link>
          </div>
        ) )
      }
      {
        tickets.length === 0 && (
          <p className="text-center">No tickets found.</p>
        )
      }
    </>
  )
}
