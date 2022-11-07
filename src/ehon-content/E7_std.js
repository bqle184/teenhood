import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import Image from 'react-image-webp';
import { MContext } from '../pages/ehon/MyProvider';

import EhonData from '../data/EhonData.json'

import './Ehon.css'
import './E7_std.css'

export default function E7_std(props){
    const thisLesson = EhonData[props.index];

    return(
        <div>
            <div className='lesson-content__inner'>
                <MContext.Consumer>
                    {(context) =>(
                        <ReactPageScroller
                        // customPageNumber={context.state.currentPage}
                        // onBeforePageScroll={(number) => {context.setCurrentPage(number)}}
                            >
                            <section className='e7 s1'>
                                <div className='section-wrapper flex-column'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s1_title.png`}/>

                                </div>
                            </section>   
                            <section className='e7 s2'>
                                <div className='section-wrapper'>
                                    <img className='title' src={process.env.PUBLIC_URL + `/images/lessons/${thisLesson.lessonId}/s1_title.png`}/>

                                </div>
                            </section>      



                        </ReactPageScroller>


                    ) }


                </MContext.Consumer>
            </div>



        </div>
    )

}