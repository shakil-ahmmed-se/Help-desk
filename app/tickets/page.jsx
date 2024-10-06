import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'
import Link from 'next/link'

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>
              Currently open tickets.
            </small>
          </p>
        </div>
       <div>
       <Link href="/tickets/create">
          <h2 className='pl-4 pb-5'>Add Ticket</h2>
        </Link>
       </div>
      </nav>
      <Suspense fallback={<Loading/>}>
        <TicketList/>
      </Suspense>
    </main>
  )
}
