import { useEffect, useRef, useState } from "react";

import { Search } from "../../components/Search";
import { Filter } from '../../components/Filter'
import { Card } from '../../components/Card'
import { Pegination } from "../../components/Pagination";



export const Characters = () => {

  const [activePage, setActivePage] = useState(1)
  const [data, setData] = useState([])
  const { info, results } = data;

  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const api = `https://rickandmortyapi.com/api/character/?page=${activePage}&name=${search}&status=${status}&gender=${gender}`

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(api)
      const data = await res.json()
      setData(data)
    }
    getData();
  }, [api])


  return (
    <>
      <div className="pt-5 row">
        <div className="col-3">
          <Search search={setSearch} activePage={setActivePage} />
          <Filter setStatus={setStatus} setGender={setGender}/>
        </div>

        <div className="col-9">
          {results?.length ? (
            <div className="d-flex justify-content-end flex-wrap gap-4">
              {
                results.map((item) =>
                  <Card obj={item} />
                )
              }
            </div>
          ) : (<h1>Characters not found!</h1>)}

        </div>
      </div>
      <Pegination totalPage={info?.pages} activePage={activePage} setActivePage={setActivePage} />
    </>
  )
}