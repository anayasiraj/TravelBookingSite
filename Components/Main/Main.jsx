import React, {useEffect} from 'react'
import './main.css'
import img from '../../Assets/img.jpg'
import angor from '../../Assets/angor.jpg'
import borabali from '../../Assets/borabali.jpg'
import borabora from '../../Assets/borabora.jpg'
import capdocia from '../../Assets/capdocia.jpg'
import greatreef from '../../Assets/greatreef.jpg'
import juan from '../../Assets/juan.jpg'
import machupichu from '../../Assets/machupichu.jpg'
import tajmahal from '../../Assets/tajmahal.jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
    {
        id: 1,
        imgSrc: borabora,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxious stys and adventurous activities'
    },
    {
        id: 2,
        imgSrc: machupichu,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'This a mountain in Peru rising over Machu Picchu the so-called lost city of Incas. This place is popular among tourists as the sunrise from the sun gate is simply spectacular'
    },
    {
        id: 3,
        imgSrc: greatreef,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'One of the most remarkable Australian natural gifts is its great barrier reef. The hallmark of this place is lavish and beauty.'
    },
    {
        id: 4,
        imgSrc: capdocia,
        destTitle: 'Capadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'According to the world tourism ranking 45 million people visit Turkey each year and from that about 2 million come to visit Capadicia. This place is known for its luxurious stays and adventurous activities'
    },
    {
        id: 5,
        imgSrc: juan,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: 'A city in central Mexico, Guanjauto is known for its history of silver mining and colonial architecture. The houses in the city are very attratively painted with the most bright colors available.'
    },
    {
        id: 6,
        imgSrc: img,
        destTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$840',
        description: 'The vibrant hues of the houses are its benchmark and epxlain the bueaty of this place. also if u are a foodie and love seafood, u will be exhilerated with the choices u are abt to find here. happy exploring great food!'
    },
    {
        id: 7,
        imgSrc: angor,
        destTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$790',
        description: 'Angkot wat represents the entire range of Khmer art from the 9th-15th centuries. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous acitivities.'
    },
    {
        id: 8,
        imgSrc: tajmahal,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'An immense mausoleum of white marle, built-in Agra by Mughal emporer Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 9,
        imgSrc: borabali,
        destTitle: 'Bora Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian Archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples, and beautiful sandy beaches'
    }, 

]

const Main = () => {

    useEffect(()=> {
            Aos.init({duration: 2000})
        }, [])
    
    return (
        <section className="main container section">  {/* uses .section stuff*/}
            <div className="secTitle">
                <h3 data-aos="fade-right"
                className="title">
                    Most popular destinations
                </h3>
            </div>


            <div className="secContent grid">

                {
                Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=> {
                    return (

                        <div key={id}
                        data-aos="fade-up"
                        className="singleDestination">

                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle}/>
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle"> {destTitle} </h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className="icon"/>
                                    <span className="name">{location}</span>
                                </span>

                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <button className="btn flex">
                                    DETAILS <HiOutlineClipboardCheck/>
                                </button>

                            </div>



                        </div>


                    )
                })
                }

            </div>



        </section>
    )
}

export default Main