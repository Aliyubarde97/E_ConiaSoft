import { Link } from 'react-router-dom';
import { links } from './Mylinks';




const Navbarlinks = () => {
    return (
        <>
            {
                links.map((link) => (
                    <div>
                        <div className='px-3 text-left md:cursor-pointer group'>
                            <h1 className='py-7'> {link.name}</h1>
                            {link.submenu && (
                                <div>
                                    <div className='absolute top-10 hidden  group-hover:md:block hover:md:block'>
                                        <div className='py-3'>
                                            <div className='w-4 h-4 left-5 absolute mt-1
                                            bg-bg-color rotate-45'>

                                            </div>
                                        </div> 
                                        <div className='bg-bg-color p-5'>
                                            {
                                                link.sublinks.map((mysublinks) => (
                                                    <div>
                                                        <h1 className='text-lg font-semibold'></h1>
                                                        {mysublinks.sublink.map(slink => (
                                                            <li className='text-sm text-white'>
                                                                <Link to={slink.link} className='hover:text-black'> {slink.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        
                    </div>
                ))
            }
        </>
    )
}

export default Navbarlinks