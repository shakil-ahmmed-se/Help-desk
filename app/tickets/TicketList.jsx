
async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0 // TODO: this should be updated in the future when tickets are updated to reflect the current state of the server state change detection process
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
          <div key={ticket.id} class='card my-5'>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice( 0, 200) }...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} Priority
            </div>

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
