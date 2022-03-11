import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './components/tombol'
import Template from './components/desain'

export default function FormAPI() {
  const [data, setdata] = useState([])
  const [edit, setedit] = useState(null)
  const getData = () => {
    console.log('get data')
    axios.get('http://localhost:3001/nama')
      .then(hasil => {
        setdata(hasil.data)
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.nama.value
    axios.post('http://localhost:3001/nama', { name: value })
      .then(() => {
        console.log('post')
        getData()
      })

    e.target.nama.value = ''
  }
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/nama/${id}`).then(() => {
      console.log('delete')
      getData()
    })
  }

  const handleEdit = (e) => {
    e.preventDefault()
    console.log('index edit', edit, data[edit].id)
    axios.patch(`http://localhost:3001/nama/${data[edit].id}`, { name: e.target.nama.value })
      .then(() => {
        getData()
        setedit(null)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <Template>
      <form onSubmit={handleSubmit} className="p-5 grid grid-cols-2 gap-4 border rounded-lg drop-shadow-2xl bg-white">
        <input type="text" className="form-input" name="nama" placeholder='Tambahkan Nama' />
        <Button type="submit" text="Tambahkan" />
      </form>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 items-center'>
        {data.map((nama, i) => {
          return <div key={i} className='drop-shadow-2xl bg-white border rounded-lg overflow-hidden p-4'>
            {edit === i ?
              <form className='w-full flex space-x-2' onSubmit={(event) => handleEdit(event)}>
                <input className="form-input w-2/3" name="nama" defaultValue={nama.name} />
                <button className='bg-blue-500 text-white px-2 rounded-lg w-1/3'>Save</button>
              </form>
              : nama.name
            }
            <div className='flex py-4 gap-4 text-center'>
              <div className="bg-primary-500 text-black px-2 rounded-lg w-1/2" onClick={() => setedit(i === edit ? null : i)}>Ubah</div>
              <div className="bg-red-500 text-white px-2 rounded-lg w-1/2" onClick={() => handleDelete(nama.id)}>Hapus</div>
            </div>
          </div>
        })}
      </div>
    </Template>
  )
}
