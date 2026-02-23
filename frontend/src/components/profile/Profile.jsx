import { useDispatch, useSelector } from 'react-redux'
import api from '../api/api'
import { useNavigate } from 'react-router'
import { removeUser } from '../../redux/slice/userSlice'

export default function Logout({logout}) {
  const dispatch = useDispatch()
  const Navigate = useNavigate()
    async function handellogout(){
        const response = await api.get("/logout")
        dispatch(removeUser())
        if(response.status == 200){
            Navigate("/login")
        }
    }
  return (
    <div className={`${logout ? "" : "translate-x-32" } -bottom-16 z-0 absolute transition-all duration-300 right-2`}>
        <div className='bg-slate-100 rounded-2xl'>
            <h1 onClick={handellogout} className='text-md p-4 hover:text-[#33B16C]'>Log Out</h1>
        </div>
    </div>
  )
}
