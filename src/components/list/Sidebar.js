import Image from 'next/image'
import user from '/public/assets/user.svg'
import dashboard from '/public/assets/dashboard.svg'
import list from '/public/assets/list.svg'

export default function DefaultSidebar() {
  return (
    <div className="w-80 h-full flex flex-col items-center border border-base-300">
        <div className="w-full h-20 flex items-center justify-center bg-[#E3F4F4]">
            <h1 className="font-bold text-2xl my-10">LinkMate</h1>
        </div>
        <div className="w-full h-36 flex justify-center my-10">
            <Image src={user} width={0} height={150} alt="img"/>
        </div>
        <div className='flex justify-center'>
            <div className='w-full h-full'>
                <div className='flex items-center gap-10 hover:bg-[#C4DFDF] p-4 rounded-2xl'>
                    <Image src={dashboard} width={0} height={40} alt="img"/>
                    <p className='text-xl'>Dashboard</p>
                </div>
                <div className='flex items-center gap-10 hover:bg-[#C4DFDF] p-4 rounded-2xl'>
                    <Image src={list} width={0} height={40} alt="img"/>
                    <p className='text-xl'>List</p>
                </div>
            </div>
        </div>
    </div>
  )
}