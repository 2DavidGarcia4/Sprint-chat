'use client'

import styles from './register.module.scss'

import { useUser } from '@/hooks/user';
import CustomForm from "@/components/form/CustomForm";
import CustomMessage from '@/components/message/CustomMessage';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Register(){
  const { isLoged } = useUser()
  const router = useRouter()

  useEffect(()=> {
    setTimeout(()=> {
      router.push('/')
    }, 10000)
  })
  
  return (
    <section className={styles.register}>
      {isLoged ?
        <CustomMessage content='Ya te has registrado.' time={10} /> :
        <CustomForm type="register" />
      }
    </section>
  )
}