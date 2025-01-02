import { Instagram } from 'lucide-react';
import { Github } from 'lucide-react';
import { Phone } from 'lucide-react';
function Footer() {
  return (
<>
    
    <div className="h-32 w-full flex flex-col items-center justify-center ">
    <h6 className="text-center text-xl font-bold pt-2">BLOGGER</h6>
        <div className='w-[95%] hidden lg:block '>
            <ul className='flex  md:justify-between text-xl mt-4'>
                <li className='flex items-center font-medium'><Instagram className='h-8 w-8' /> mr.falseofficial</li>
                <li className='flex items-center font-medium'><Github className='h-8 w-8'/> Dark-Devil-666</li>
                <li className='flex items-center font-medium'><Phone className='h-8 w-8'/> +92 3180681829</li>
                <li className='flex items-center font-medium'><Phone className='h-8 w-8'/> +92 3118927997</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Footer