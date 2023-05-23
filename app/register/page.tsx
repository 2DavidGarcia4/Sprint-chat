'use client'

import styles from './register.module.scss'

import { useUser } from '@/hooks/user';
import CustomForm from "@/components/form/CustomForm";
import CustomMessage from '@/components/message/CustomMessage';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register(){
  const { isLoged } = useUser()
  const router = useRouter()
  const [autoRedirect, setAutoRedirect] = useState(true)

  useEffect(()=> {
    if(isLoged){
      setAutoRedirect(true)  
      setTimeout(()=> {
        router.push('/')
      }, 10000)
    
    }else{
      setAutoRedirect(false)  
    }
  }, [isLoged])
  
  return (
    <section className={styles.register}>
      {(autoRedirect && isLoged) ?
        <CustomMessage content='Ya te has registrado.' time={10} /> :
        <CustomForm type="register" />
      }
    </section>
  )
}