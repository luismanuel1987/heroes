import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, MarvelPage, SearchPage, HeroPage} from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar></Navbar>
        <div className='container'>
            <Routes> 
                <Route path='marvel' element={<MarvelPage></MarvelPage>}></Route>
                <Route path='dc' element={<DcPage></DcPage>}></Route>

                <Route path='search' element={<SearchPage></SearchPage>}></Route>
                <Route path='hero/:id' element={<HeroPage></HeroPage>}></Route>

                {/* Search, Hero by id */}
                <Route path='/' element={<Navigate to="/marvel"></Navigate>}></Route>
            </Routes>
        </div>
 
    </>
  )
}
