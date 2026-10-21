'use client';
import {useState} from 'react';
export default function Photo(){const [missing,setMissing]=useState(false);return <div className="photo-frame">{missing?<div className="photo-placeholder"><span>BA</span><small>Add your photo at<br/>public/images/profile.jpg</small></div>:<img src="/images/profile.jpg" alt="Portrait of Bassam Ashraf" onError={()=>setMissing(true)}/>}<div className="photo-badge">OPEN TO COLLABORATION <span>●</span></div></div>}
