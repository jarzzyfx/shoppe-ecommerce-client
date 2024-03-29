// coloured
// bare
// import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import './Table.css'
// import { useState } from 'react'

const Table = ({expectedData}) => {

     

  return (
    <table>
    <tr>
      <th>Order Number</th>
      <th>Date</th>
      <th>Status</th>
      <th>Total</th>
      <th>Action</th>
    </tr>

    <tbody>
    {
        expectedData && expectedData.map(data => (
          <tr  key={data. orderNumber}>
      <td >{data. orderNumber}</td>
      <td >{data.date}</td>
      <td >{data.status}</td>
      <td >{data.total}</td>
      <td ><a className='link' href={data.action.link}>{data.action.text}</a></td>
    </tr>
        ))
      }
    
    </tbody>
    {/* <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr> */}
    
  </table>
  )
}

export default Table