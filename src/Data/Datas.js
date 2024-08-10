import React, { useState } from 'react'
import './Datas.css';


const Datas = () => {
    const [inputarr, setinputarr] = useState([])
    const [inputdata, setinputdata] = useState({

        username: "",
        select: "",
        email: "",
        amount: "",
        duedate: "",

        userrequest: "",
        company: ""

    })


    function changing(e) {

        setinputdata({ ...inputdata, [e.target.name]: e.target.value })
    }
    // let {johnsnow,name,email,amount,duedate,company}=inputdata;
    // function handlechange(){
    //     setinputarr([...inputarr,{johnsnow,name,email,amount,duedate,company}])

    // }
    let { username, email, amount, duedate, company, userrequest } = inputdata;
    const handlechange = (e) => {
        e.preventDefault()
        e.target.reset()

        setinputarr([...inputarr, { username, email, amount, duedate, company, userrequest }])



    }


    return (
        < >
            <div className='bg-gray-200 py-10'>
                <form action="" className='mx-auto bg-white shadow-md shadow-slate-200 my-10 w-3/6   pl-10  rounded-xl' onSubmit={handlechange}>
                    <div>
                        <h1 className='text-4xl mt-4 text-center '>Form</h1>
                        <h1 className='text-xl mt-4 font-semibold mb-4'>Contact details</h1>
                        <div className='mr-8 '>
                            <h1 className='text-base   mb-3'> Send payment request number</h1>
                            <select name="userrequest" required id="" value={inputdata.userrequest} onChange={changing} className='w-full  border-2 border-gray-200 h-10 focus:border-green-500 rounded-xl pl-2'>
                                <option className='' >Send user request to</option>
                                <option className='' value={"Johnsoow"}>john snow</option>
                                <option value={"Welsey"}  >welsey</option>
                                <option value={"Dragon"} > dargon</option>
                            </select>
                        </div>

                        <div className='flex  py-3'>
                            <div className='block '>
                                <label htmlFor="">Name</label>
                                <input type="text " value={inputdata.name} name='username' onChange={changing} className='pl-2 block border-2 h-10  focus:border-green-500 border-gray-200 w-64 rounded-xl' />

                            </div>


                            <div className='mx-4'>
                                <label htmlFor="" >Email</label>
                                <input type="email" placeholder='example@gmail.com' className='block border-2 pl-2 h-10 focus:border-green-500 border-gray-200 w-64 mr-20 rounded-xl' value={inputdata.email} name='email' onChange={changing} />

                            </div>

                        </div>
                        <h1 className='py-2 font-bold	'>Request details</h1>

                        <div className='flex '>
                            <div className='block '>
                                <label htmlFor="">Amount</label>

                                <input type="number" placeholder='$' min={0} className='block pl-2 border-2 h-10 focus:border-green-500  border-gray-200 w-64 rounded-xl' value={inputdata.amount} name='amount' onChange={changing} />
                            </div>
                            <div className='mx-4'>
                                <label htmlFor=""> Due date</label>
                                <input type="date" min={new Date().toISOString().split('T')[0]}
                                    required className='block border-2 h-10 pl-2 focus:border-green-500 border-gray-200 w-64 mr-20 rounded-xl' value={inputdata.duedate} name='duedate' onChange={changing} />
                            </div>
                        </div>

                        <div className='mr-8'>
                            <h1 className=' mt-10 mb-3  font-semibold	 '>Company name show on request</h1>
                            <select name="company" id="" required value={inputdata.company} onChange={changing} className='w-full  border-2 focus:border-green-500 h-10 rounded-xl pl-2 mb-10'>
                                <option className='' >Company name</option>
                                <option value="accenture">Accenture</option>
                                <option value="infosys"> Infosys</option>
                            </select>
                        </div>

                    </div>

                    <div className='flex justify-center'>
                        <button type='submit' className='w-96  h-10 rounded-xl bg-red-500 mb-10'  >Submit</button>

                    </div>



                </form>
            </div>


            <div className='flex justify-center mt-20'>

                <table className='' >

                    <tr>
                        <th className='border-2 border-black p-3'>Send payment to</th>
                        <th className='border-2 border-black p-3'>Name</th>
                        <th className='border-2 border-black p-3'>Email</th>
                        <th className='border-2 border-black p-3'>Amount</th>
                        <th className='border-2 border-black p-3'>Duedate</th>
                        <th className='border-2 border-black p-3'>Company name</th>
                    </tr>
                    {
                        inputarr.map(

                            (info, ind) => {
                                return (
                                    <tr key={ind} className='border-2 border-black'>


                                        <td className='border-2 border-black p-3'>{info.userrequest}</td>
                                        <td className='border-2 border-black p-3'>{info.username}</td>
                                        <td className='border-2 border-black p-3'>{info.email}</td>
                                        <td className='border-2 border-black p-3'>{info.amount}</td>
                                        <td className='border-2 border-black p-3'>{info.duedate}</td>
                                        <td className='border-2 border-black p-3'>{info.company}</td>


                                    </tr>
                                )
                            }
                        )
                    }
                </table>

            </div>


        </>


    )
}

export default Datas