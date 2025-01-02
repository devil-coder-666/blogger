import Link from "next/link"
async function abc (){
  let a = await fetch("https://dummyjson.com/posts")
  let b = await a.json()
  return b.posts
}
async function Hero() {
  let bb = await abc()
  
  
  return (
    <div className=" w-full flex flex-wrap justify-center items-center pt-12 relative">{bb.map((elem:any, i:any)=>{
    return(
       <Link href={`${elem.id}`} key={i}>
      <div className="w-[200px] h-[300px] m-1 bg-white rounded-md mt-10 text-center shadow-md pt-4 ">
      <h3 className="pt-10 text-2xl font-mono font-bold ">{elem.title}
        
      </h3>
      <h5 className="mt-4">{elem.id}</h5>
      
      </div></Link>
    )
    })}</div>
  )
}

export default Hero