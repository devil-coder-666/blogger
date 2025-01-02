 import Image from "next/image"
import Link from "next/link"
function Navbar() {
  return (
   <div className="h-20 w-full flex bg-white  justify-center items-center shadow-lg fixed z-50">
    <div className="w-[95%] justify-between items-center flex">
     <div>
    <Link href={"../"}>     <Image src={"/log.jpg"} alt="logo" width={120} height={120}></Image></Link>

     </div>
     <div className="flex gap-10 text-xl font-medium">
      <Link href={"../"}>
      <h5 >Home</h5></Link>
<Link href={"../"}>
      <h5>BLogs</h5>
      </Link>
     </div>
     </div>
   </div>)
}

export default Navbar