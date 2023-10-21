import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dec, Inc } from '../../redux/slice/counterSlice';

const Filtermenu = () => {

    const dispatch = useDispatch();
    const countPage = useSelector(state => state.counter.val)
    const islogin = useSelector(state => state.login.isLogin)

    const [filter, setFilter] = useState()
    const [pagination, setPagination] = useState()
    const [data, setData] = useState([])
    const [search, setSearch] = useState()


    const fetchImage = async () => {

        const url = "https://api.unsplash.com/search/photos?"
        const api = await fetch(`${url}page=${pagination}&query=${filter}&client_id=sYrEAG_KfFFq6Z2iBGe51qvb426xhKwLpcf_CsW-5L4`)
        const data = await api.json()
        const response = data.results;
        setData(response)

    }

    const searchImage = async () => {
     setFilter(search)
    }  



    useEffect(() => {
        (() => fetchImage())()
        setPagination(countPage)
    }, [countPage, filter, data,search])


    return (
        <>
            {
                islogin && (
                    <div className='container-fluid'>
                        <div className='row '>
                            <ul className='filter_menu'>
                                <li><button onClick={() => setFilter("All")} className='btn btn-outline-warning btn-sm'
                                >All</button></li>
                                <li><button onClick={() => setFilter("food")} className='btn btn-outline-primary btn-sm'
                                >Food</button></li>
                                <li><button onClick={() => setFilter("travel")} className='btn btn-outline-success btn-sm'
                                >Travel</button></li>
                                <li><button onClick={() => setFilter("blog")} className='btn btn-outline-info btn-sm'
                                >Blog</button></li>
                                <li><button onClick={() => setFilter("trip")} className='btn btn-outline-warning btn-sm'
                                >Trip</button></li>
                                <li><button onClick={() => setFilter("nature")} className='btn btn-outline-danger btn-sm'
                                >Nature</button></li>
                                <li><button onClick={() => setFilter("temple")} className='btn btn-outline-primary btn-sm'
                                >Temples</button></li>
                                <li>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div>
                                            <input type="search" id="form1"
                                                onChange={(e) => setSearch(e.target.value)}
                                                class="form-control" placeholder='search image' />
                                        </div>

                                        <div>
                                            <button className='btn btn-primary '
                                                style={{ position: 'relative', right: '100%' }}
                                                onClick={searchImage}
                                            >
                                                <i class="fa fa-search" aria-hidden="true"></i>
                                            </button>
                                        </div>


                                    </div>
                                </li>

                            </ul>


                        </div>

                        <div className='row' style={{ height: '70.5vh', display: 'flex', overflowY: 'hidden', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', overflowY: 'scroll', marginTop: '.2rem' }}>
                            {
                                data.map((ele, ind) => {
                                    return (
                                        <div className="max-w-sm rounded overflow-hidden shadow-lg" style={{ width: '200px', height: 'auto', marginTop: '.1rem', margin: '.4rem', }}>
                                            <img className="w-full img-fluid image" style={{ width: '100%', height: '165px', objectFit: 'cover', borderRadius: '.5rem', marginTop: '.025rem' }} src={ele.urls.raw} alt="Sunset in the mountains" />
                                            <div className="px-3 py-3">
                                                <div style={{ width: '100%', height: '100px', }} className="font-bold text-sm mb-2">{ele.alt_description}</div>
                                                {/* <p style={{ width: '100%', height: '200px', overflowY: 'scroll', overflowX: 'hidden' }} className="text-gray-700 text-base">
                                                    {ele.user.bio}
                                                </p> */}
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className='row'>
                            <ul className='paggination'>
                                <li><button onClick={() => dispatch(Dec())} className='btn btn-danger'
                                >Prev</button></li>
                                <li className='d-flex flex-row justify-content-center align-items-center gap-1' style={{ color: 'red', }}> {pagination} / 3 </li>
                                <li><button onClick={() => dispatch(Inc())} className='btn btn-success'
                                >Next</button></li>
                            </ul>
                        </div>

                    </div>
                )
            }

        </>
    )
}

export default Filtermenu;