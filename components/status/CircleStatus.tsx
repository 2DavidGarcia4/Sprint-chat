'use client'

import styles from './status.module.scss'

import { useRef, useEffect } from 'react'
import { UserStatus } from '@/utils/types'
import { statusTypes } from '@/utils/data'

export default function CircleStatus({status, size}: {status: UserStatus, size?: number}){
  const thisRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const size = thisRef.current?.parentElement?.clientWidth

    if(size){
      let a = Math.sqrt(2 * size * size)
      let b = a / 2
      let c = b - (size / 2)
      let res = Math.sqrt(c * c / 2)
      
      thisRef.current.style.bottom = `${res}px`
      thisRef.current.style.right = `${res}px`
    }
  }, [])

  return (
    <div ref={thisRef} className={`${styles.circle} ${styles[statusTypes[status.status]]}`} style={size ? {width: `${size}px`, height: `${size}px`, borderWidth: `${Math.floor(size/8)}px`} : undefined} ></div>
  )
}