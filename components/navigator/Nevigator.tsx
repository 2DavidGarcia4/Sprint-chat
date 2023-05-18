'use client'

import styles from './navigator.module.scss'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsChatLeftText, BsChatLeftTextFill } from 'react-icons/bs'
import { RiContactsLine, RiContactsFill } from 'react-icons/ri'
import { HiOutlineUser, HiUser } from 'react-icons/hi'
import { BsGear, BsGearFill } from 'react-icons/bs'
import { useUser } from '@/hooks/user'
import { useUserProv } from '@/context/contexts'
import { MouseEvent, useEffect } from 'react'
import { endPoint } from '@/utils/data'
import CircleStatus from '../status/CircleStatus'



export default function Navigator(){
  const pathname = usePathname()
  const { protectedRoute } = useUser()
  const { user, setUser } = useUserProv()

  useEffect(()=> {
    if(typeof localStorage != 'undefined'){
      const token = localStorage.getItem('secret')

      if(token){
        fetch(`${endPoint}users/@me`, {
          headers: {
            "Authorization": `jwt ${token}`
          }
        }).then(prom=> prom.json()).then(res=> {
          if(res.id) setUser(res)
        })
        .catch(()=> '')
      }
    }
  }, [])

  const isActiveRoute = (routName: string) => routName == pathname

  const handlerClick = ({currentTarget: { classList }}: MouseEvent<HTMLLIElement>) => {
    // const target = e.currentTarget
    classList.add(styles.animation)
    setTimeout(()=> {
      classList.remove(styles.animation)
    }, 400)
    protectedRoute()
  }

  return (
    <nav className={`${styles.navigator} ${['/login', '/register'].some(s=> s==pathname) ? styles.hide : ''}`}>
      <ul className={styles.navigator_elements}>
        <li onClick={handlerClick} className={`${styles.navigator_elements_item} ${isActiveRoute('/') ? styles.selected : ''}`}>
          <Link href={'/'}>
            {isActiveRoute('/') ? <BsChatLeftTextFill className={styles.navigator_icon}  /> : <BsChatLeftText className={styles.navigator_icon} />}
          </Link>
        </li>
        <li onClick={handlerClick} className={`${styles.navigator_elements_item} ${isActiveRoute('/me') ? styles.selected : ''}`}>
          <Link href={'/me'}>
            <div className={styles.navigator_elements_user}>
              {
                true ?
                (isActiveRoute('/me') ? <HiUser className={styles.navigator_icon} /> : <HiOutlineUser className={styles.navigator_icon} />) :
                <img src="" alt="" />
              }
              {user?.status &&
                <CircleStatus status={user.status} />
              }
              
            </div>
          </Link>
        </li>
        <li onClick={handlerClick} className={`${styles.navigator_elements_item} ${isActiveRoute('/friends') ? styles.selected : ''}`}>
          <Link href={'/friends'}>
            {isActiveRoute('/friends') ? <RiContactsFill className={styles.navigator_icon} /> : <RiContactsLine className={styles.navigator_icon} />}
          </Link>
        </li>
        <li onClick={handlerClick} className={`${styles.navigator_elements_item} ${isActiveRoute('/settings') ? styles.selected : ''}`}>
          <Link href={'/settings'}>
            {isActiveRoute('/settings') ? <BsGearFill className={styles.navigator_icon} /> : <BsGear className={styles.navigator_icon} />}
          </Link>
        </li>
      </ul>
    </nav>
  )
}