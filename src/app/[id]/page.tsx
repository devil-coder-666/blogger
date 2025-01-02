import Link from "next/link"

async function page(props:any) {
  
  let a = await fetch(`https://dummyjson.com/posts/${props.params.id}/`)
  let b = await a.json()

  
  return (
   
    <div className="pt-24 flex justify-center items-center flex-col">
    <h5 className="text-center text-2xl font-mono font-semibold">{b.title}</h5>
    <p className="text-center mt-8 font-medium">{b.body}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint distinctio atque aliquid minima soluta illum maiores
       libero ex neque aut molestias ad magnam praesentium eveniet cum illo, quod dolorem laborum!
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium earum eum, nemo distinctio ad quisquam eos quos illo maiores et unde neque excepturi voluptas, quidem quod rem vel, ut in.
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eveniet laborum illum eius dignissimos inventore. Consequuntur corporis nam dolorum, in dolore quia at possimus a, labore, minus ipsa temporibus rerum?
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius corrupti debitis eaque distinctio vero sapiente laboriosam repudiandae in dolorem nobis delectus aliquam accusamus culpa, libero aut. Tempora neque culpa quod?
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid similique assumenda error temporibus aut magnam aspernatur laborum delectus eaque. Blanditiis aut expedita quidem, nesciunt inventore dolore nostrum totam quos corrupti.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in enim laborum! Sapiente dolorem nemo reprehenderit magni, nam accusamus voluptatibus aspernatur eos ex, nisi labore eligendi asperiores ad fuga quia.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus magni quibusdam eveniet tempore? Fugit debitis ut beatae sed atque optio quae, maiores at eos a mollitia dolorum ea non aspernatur!Loremlo
       Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorum veniam ducimus voluptate quisquam esse harum voluptatum minima distinctio, ut eaque asperiores, vero eos dicta! Quod voluptatibus eos cumque inventore!
    </p><Link href={"../"} className="mt-8">
   <span className="bg-black text-white px-4 py-2 rounded-2xl text-center mt-8 cursor-pointer hover:bg-white hover:text-black hover:border-black hover:border">GO HOME</span>
   </Link>
    </div>
    
  )
}

export default page