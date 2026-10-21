'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ArrowUpRight,ArrowRight} from 'lucide-react';
import {projects} from '@/lib/data';
const filters=['All','AI & Machine Learning','Full-Stack Development','Algorithms & Desktop'];
export default function ProjectGrid({compact=false}:{compact?:boolean}){const [filter,setFilter]=useState('All');const shown=projects.filter(p=>filter==='All'||p.category===filter);return <><div className="filters" role="group" aria-label="Filter projects">{filters.map(f=><button key={f} onClick={()=>setFilter(f)} className={filter===f?'filter active':'filter'} aria-pressed={filter===f}>{f}</button>)}</div><div className="project-grid">{(compact?shown.slice(0,3):shown).map((p,i)=><Link href={'/projects/'+p.slug} className="project-card" key={p.slug}><div className={'project-art art-'+(projects.indexOf(p)+1)}><span className="art-index">0{projects.indexOf(p)+1} / CASE STUDY</span><span className="art-symbol">{['⌁','▦','✕','♜'][projects.indexOf(p)]}</span><ArrowUpRight size={22}/></div><div className="project-body"><span className="eyebrow">{p.category}</span><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.stack.slice(0,3).map(t=><span key={t}>{t}</span>)}</div><span className="card-link">View case study <ArrowRight size={16}/></span></div></Link>)}</div></>}
