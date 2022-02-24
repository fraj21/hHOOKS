import { Rate } from 'antd';
import React from 'react';

function Filter({rating,isRating,Rates,setRate}) {
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  return (
  <div style={{display:'flex',justifyContent:'center'}}>
  
    
     {isRating? (
     <div> 
        <Rate disabled value={rating} />
      </div>
      ): (
        <div>
       <Rate  tooltips={desc} value={Rates}   onChange={(e)=>setRate(e)}/>
        </div>
        )}
</div>
  )}

export default Filter;




 
 
 
  