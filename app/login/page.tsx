'use client'

import styles from './login.module.scss'
import { useUser } from '@/hooks/user'
import CustomForm from '@/components/form/CustomForm'
import CustomMessage from '@/components/message/CustomMessage'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Login(){
  const { isLoged } = useUser()
  const router = useRouter()

  useEffect(()=> {
    setTimeout(()=> {
      router.push('/')
    }, 10000)
  })

  return (
    <section className={styles.login}>
      {isLoged ?
        <CustomMessage content='Ya has iniciado sesión.' time={10} /> :
        <CustomForm type='login' />
      }
    </section>
  )
}