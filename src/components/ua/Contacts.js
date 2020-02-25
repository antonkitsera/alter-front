import React from "react"

const Contacts = ({ siteTitle }) => (
  <section className="contacts">
    <div className="contacts__wrapper container">  
      <a data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className="contacts__link" href="mailto:welcome@altersvcs.com">
        <svg className="contacts__icon" width="18" height="18" viewBox="0 0 18 18" fill="#5124EA" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 0.75V2.17529L0.00585938 5.10205V17.25H17.9941V5.10205L13.5 2.17383V0.75H4.5ZM6 2.25H12V8.01123L9 9.95508L6 8.01123V2.25ZM6.75 3.75V5.25H11.25V3.75H6.75ZM4.5 3.96387V7.04004L2.13281 5.50635L4.5 3.96387ZM13.5 3.96387L15.8672 5.50635L13.5 7.04004V3.96387ZM6.75 6V7.5H11.25V6H6.75ZM1.50586 6.8877L9 11.7422L16.4941 6.8877V15.75H1.50586V6.8877Z" />
        </svg>
        welcome@altersvcs.com
      </a>
    
      <a data-sal="slide-right" data-sal-duration="1000" data-sal-delay="350" data-sal-easing="ease" className="contacts__link" href="tel:+380661346773">
        <svg className="contacts__icon" width="20" height="20" viewBox="0 0 20 20" fill="#5124EA" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.05669 0.564453L1.69536 2.92578C0.400436 4.2207 0.119186 6.23633 1.04497 7.81836C2.07622 9.58789 2.91997 10.8945 6.45317 14.4219C9.98051 17.9551 10.9415 18.4355 12.6817 19.4551C14.2696 20.3809 16.2793 20.0996 17.5684 18.8047L19.9356 16.4434L15.3653 11.8789L13.5079 13.7363C13.2852 13.6367 12.9512 13.4609 12.5645 13.2148C11.7676 12.7051 10.7481 11.9258 9.85161 11.0234C8.94926 10.127 8.07036 9.00781 7.46098 8.10547C7.16215 7.66016 6.92192 7.25586 6.79301 6.99219C6.78715 6.98047 6.78715 6.98047 6.78129 6.96875L8.62114 5.12891L4.05669 0.564453ZM4.05669 2.68555L6.50004 5.12891L5.42778 6.20703C5.20512 6.42969 5.18169 6.67578 5.18754 6.81641C5.18754 6.95117 5.21098 7.04492 5.23442 7.13281C5.28715 7.31445 5.35747 7.47266 5.44536 7.66016C5.627 8.02344 5.89067 8.45703 6.21879 8.94922C6.87504 9.92187 7.80083 11.0996 8.7852 12.0898C9.77544 13.0742 10.8653 13.9062 11.7618 14.4746C12.2071 14.7617 12.5997 14.9785 12.9336 15.125C13.1036 15.2012 13.2559 15.2598 13.4375 15.2949C13.5254 15.3125 13.625 15.3242 13.7598 15.3125C13.8946 15.3066 14.1055 15.2598 14.293 15.0723L15.3653 14L17.8145 16.4434L16.5079 17.75C15.6934 18.5645 14.4336 18.7402 13.4375 18.1602C11.668 17.123 10.9942 16.8477 7.50786 13.3672C4.02739 9.88086 3.35942 8.80859 2.33989 7.0625C1.75981 6.06641 1.93559 4.80664 2.75004 3.99219L4.05669 2.68555Z" />
        </svg>
        +38 066 134 67 73
      </a>
    
      <a data-sal="slide-right" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease" className="contacts__link" href="https://goo.gl/maps/MdTrRfqpK2CZAjGp6" target="_blank" rel="noopener noreferrer">
        <svg className="contacts__icon" width="19" height="18" viewBox="0 0 19 18" fill="#5124EA" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.25 0L11.9976 1.99631L6.46995 0.586174L0.25 2.37235V18L1.1262 17.7456L6.49159 16.2028L12.0409 17.624L18.25 15.6387V0ZM16.8654 1.92442V14.5991L12.7115 15.9263V3.25161L16.8654 1.92442ZM7.17308 2.22304L11.3269 3.28479V15.9816L7.17308 14.9198V2.22304ZM5.78846 2.25069V14.9364L1.63462 16.1309V3.44516L5.78846 2.25069Z" />
        </svg>
        Київ, Б. Хмельницького 17/52
      </a>
    </div>
  </section>
)

export default Contacts
