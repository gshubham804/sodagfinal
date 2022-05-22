import React from 'react'
import './Product.css'
import './Assests/Tablets/3-1.png'

const tablets=[
    {
        img:require('./Assests/Tablets/3-1.png')
    },
    {
        img:require('./Assests/Tablets/3-2.png')
    },
    {
        img:require('./Assests/Tablets/3-3.png')
    },
    {
        img:require('./Assests/Tablets/3-4.png')
    },
    {
        img:require('./Assests/Tablets/3-5.png')
    },
    {
        img:require('./Assests/Tablets/3-6.png')
    },{
        img:require('./Assests/Tablets/3-7.png')
    },
    {
        img:require('./Assests/Tablets/3-8.png'
)    },{
        img:require('./Assests/Tablets/3-9.png'
)    },{
        img:require('./Assests/Tablets/3-10.png')
    },{
        img:require('./Assests/Tablets/3-11.png')
    },{
        img:require('./Assests/Tablets/3-12.png')
    },{
        img:require('./Assests/Tablets/3-13.png')
    },{
        img:require('./Assests/Tablets/3-14.png')
    },{
        img:require('./Assests/Tablets/3-15.png')
    },{
        img:require('./Assests/Tablets/3-16.png')
    },{
        img:require('./Assests/Tablets/3-17.png')
    },{
        img:require('./Assests/Tablets/3-18.png')
    },{
        img:require('./Assests/Tablets/3-19.png')
    },{
        img:require('./Assests/Tablets/3-20.png')
    },{
        img:require('./Assests/Tablets/3-21.png')
    },{
        img:require('./Assests/Tablets/3-22.png')
    },{
        img:require('./Assests/Tablets/3-23.png')
    },{
        img:require('./Assests/Tablets/3-24.png')
    },
    {
        img:require('./Assests/Tablets/3-25.png')
    },
    {
        img:require('./Assests/Tablets/3-26.png')
    },{
        img:require('./Assests/Tablets/3-27.png')
    },{
        img:require('./Assests/Tablets/3-28.png')
    },{
        img:require('./Assests/Tablets/3-29.png')
    },{
        img:require('./Assests/Tablets/3-30.png')
    },{
        img:require('./Assests/Tablets/3-31.png')
    },{
        img:require('./Assests/Tablets/3-32.png')
    },{
        img:require('./Assests/Tablets/3-33.png')
    },{
        img:require('./Assests/Tablets/3-34.png')
    },{
        img:require('./Assests/Tablets/3-35.png')
    },{
        img:require('./Assests/Tablets/3-36.png')
    },{
        img:require('./Assests/Tablets/3-37.png')
    },
]

const capsules=[
    {
        img:require('./Assests/Capsules/3-38.png')
    },
    {
        img:require('./Assests/Capsules/3-39.png')
    },
    {
        img:require('./Assests/Capsules/3-40.png')
    },
    {
        img:require('./Assests/Capsules/3-41.png')
    },
    {
        img:require('./Assests/Capsules/3-42.png')
    },
] 

const otc=[
    {
        img:require('./Assests/Otc/1-1.png')
    },
    {
        img:require('./Assests/Otc/1-2.png')
    }, 
    {
        img:require('./Assests/Otc/1-3.png')
    }, 
    {
        img:require('./Assests/Otc/1-4.png')
    }, 
    {
        img:require('./Assests/Otc/1-5.png')
    }, 
    {
        img:require('./Assests/Otc/1-6.png')
    },   
]

const veterinary=[
    {
        img:require('./Assests/Veterniary/2-1.png')
    }, 
]



const Product = () => {
    
  return (
      <>
      <div className="product-main-cont">
          <div className="product-first-sub-cont">
              <h2>PRODUCTS</h2>
          </div>
          <div className="product-second-sub-cont heading-style">
              <h2>Tablets & Capsules</h2>   
           <div className="row tablets-row" style={{margin:'0'}}>
               {
           tablets.map( (data) =>(
           <div className="col-lg-3 col-md-4 col-sm-12 tablets-col">
               <div className="product-card">
                   <img src={data.img} alt="" />
               </div>
           </div>
            ))
}
           </div>
          </div>
          <div className="product-third-sub-cont heading-style">
          <h2>Capsules</h2>   
           <div className="row tablets-row" style={{margin:'0'}}>
               {
           capsules.map( (data) =>(
           <div className="col-lg-3 col-md-4 col-sm-12 tablets-col">
               <div className="product-card">
                   <img src={data.img} alt="" />
               </div>
           </div>
            ))
}
           </div>
          </div>
          <div className="product-fourth-sub-cont heading-style">
          <h2>OTC PRODUCTS</h2>   
           <div className="row tablets-row" style={{margin:'0'}}>
               {
           otc.map( (data) =>(
           <div className="col-lg-3 col-md-4 col-sm-12 tablets-col">
               <div className="product-card">
                   <img src={data.img} alt="" />
               </div>
           </div>
            ))
}
           </div>
          </div>

          <div className="product-fifth-sub-cont heading-style">
          <h2>Veterinary Feed Suppliment</h2>   
           <div className="row tablets-row" style={{margin:'0'}}>
               {
           veterinary.map( (data) =>(
           <div className="col-lg-3 col-md-4 col-sm-12 tablets-col">
               <div className="product-card">
                   <img src={data.img} alt="" />
               </div>
           </div>
            ))
}
           </div>
          </div>
      </div>
      </>
  )
}

export default Product