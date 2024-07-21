"use client"
import React,{useEffect} from 'react'

export default function BootstrapInstall() {
    useEffect(()=>{
        require('bootstrap/dist/js/bootstrap.min.js');
        
    },[])
  return null
}
