"use client"
import React,{useEffect} from 'react'

export default function BootstrapInstall() {
    useEffect(()=>{
        // require('bootstrap/dist/js/bootstrap.min.js');
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    },[])
  return null
}
