import * as React from 'react'
import Loader from '../components/loaders/Loader';

export default function CatList(props: any) {
    const [loader, setLoader] = React.useState(false)

    return (
        <section className='mt-3 mb-3 text-center'>
            <h1>This is the map page :D</h1>

            <div className='mt-5'>
                <p>{}</p>
            </div>
        </section>
    )

}
