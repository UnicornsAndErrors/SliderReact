import React from 'react'
import { useInView } from 'react-intersection-observer';

const Slider = ({image, title, subtitle, flip}) => {
    const { ref, inView  } = useInView({
        
        threshold: 0.4,
      });
      const renderContent = ( ) =>{
        if(!flip){
            return (
                <div className="slider slider--zoom">
                    <img src={image} alt={title} className="slider__image" />
                    <div className="slider__content">
                        <h1 className="slider__title">{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </div>
            );
        }else{
            return (
                <div className="slider slider--zoom">
                    <div className="slider__content">
                    <h1 className="slider__title">{title}</h1>
                    <p>{subtitle}</p>
                    </div>
                    <img src={image} alt={title} className="slider__image" />
                </div>
            )
        }
      }
    
  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>{renderContent()}</div>
  )
    
  
};

export default Slider