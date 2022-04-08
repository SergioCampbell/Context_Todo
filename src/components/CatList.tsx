import { useContext, useEffect, useState } from 'react'
import Loader from './loaders/Loader';

export default function CatList() {
    const [loader, setLoader] = useState(false)
    //const { handleCatch }: any = useState({props})

    //const cat = useContext(CatContext)

    useEffect(() => {
        getCatList()
    }, [])

    const getCatList = async () => {
        // setLoader(true)
        await console.log('cat')
        // setLoader(false)
    }

    return (
        <section className='mt-3 mb-3 text-center'>
            <h1>This is a little list :D</h1>
            <button className="btn btn-primary mt-3" onClick={() => {}}>All cats</button>
            
            <div className='mt-5'>
                <p> == </p>
            </div>
        </section>
    )

}
