'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
import {Menu,X} from 'lucide-react';
const links=[['/','Home'],['/projects','Projects'],['/about','About'],['/skills','Skills'],['/experience','Experience'],['/contact','Contact']];
export default function Header(){const path=usePathname();const [open,setOpen]=useState(false);return <header className="site-header"><div className="shell nav"><Link className="brand" href="/" onClick={()=>setOpen(false)}>BA<span>.</span><small> / DATA & AI</small></Link><button className="mobile-menu" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav className={open?'nav-links open':'nav-links'} aria-label="Main navigation">{links.map(([href,label])=><Link key={href} onClick={()=>setOpen(false)} className={path===href||href!=='/'&&path.startsWith(href)?'active':''} href={href}>{label}</Link>)}</nav></div></header>}
