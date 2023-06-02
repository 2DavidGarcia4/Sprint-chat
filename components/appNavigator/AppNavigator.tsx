'use client'

import styles from './appNavigator.module.scss'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsChatLeftText, BsChatLeftTextFill } from 'react-icons/bs'
import { RiContactsLine, RiContactsFill } from 'react-icons/ri'
import { HiOutlineUser, HiUser } from 'react-icons/hi'
import { BsGear, BsGearFill } from 'react-icons/bs'
import { useUser } from '@/hooks/user'
import { useUserCtx } from '@/context/contexts'
import { MouseEvent, useEffect } from 'react'
import CircleStatus from '../status/CircleStatus'
import { useTooltip } from '@/hooks/useTooltip'

export default function AppNavigator(){
  const pathname = usePathname()
  const { protectedRoute } = useUser()
  const { user } = useUserCtx()
  const { addTooltip, events } = useTooltip()

  const isActiveRoute = (routName: string) => pathname.includes(routName)

  const handlerClick = ({currentTarget: { classList }}: MouseEvent<HTMLLIElement>) => {
    // const target = e.currentTarget
    classList.add(styles.animation)
    setTimeout(()=> {
      classList.remove(styles.animation)
    }, 400)
    protectedRoute()
  }

  return (
    <nav className={`${styles.navigator} `}>
      <ul className={styles.navigator_elements}>
        <li {...events} onClick={handlerClick} className={`${styles.navigator_elements_item} ${isActiveRoute('/chats') ? styles.selected : ''}`} data-tooltip='Chats genial' data-direction='top'>
          <Link href={'/chats'}>
            {isActiveRoute('/chats') ? <BsChatLeftTextFill className={styles.navigator_icon}  /> : <BsChatLeftText className={styles.navigator_icon} />}
          </Link>
        </li>
        <li {...events} onClick={handlerClick} className={`${styles.navigator_elements_item} ${isActiveRoute('/me') ? styles.selected : ''}`} data-tooltip='Tu perfil' data-direction='top'>
          <Link href={'/me'}>
            <div className={styles.navigator_elements_user}>
              {
                user?.avatarUrl ?
                <img className={styles.navigator_avatar} src={user.avatarUrl} alt='User avatar' width={34} height={34} /> :
                (isActiveRoute('/me') ? <HiUser className={styles.navigator_icon} /> : <HiOutlineUser className={styles.navigator_icon} />)
              }
              {user?.status &&
                <CircleStatus status={user.status} />
              }
              
            </div>
          </Link>
        </li>
        <li {...events} onClick={handlerClick} className={`${styles.navigator_elements_item} ${isActiveRoute('/friends') ? styles.selected : ''}`} data-direction='top' data-tooltip='Tus amigos'>
          <Link href={'/friends'}>
            {isActiveRoute('/friends') ? <RiContactsFill className={styles.navigator_icon} /> : <RiContactsLine className={styles.navigator_icon} />}
          </Link>
        </li>
        <li {...events} onClick={handlerClick} className={`${styles.navigator_elements_item} ${isActiveRoute('/settings') ? styles.selected : ''}`} data-direction='top' data-tooltip='Configuración'>
          <Link href={'/settings'}>
            {isActiveRoute('/settings') ? <BsGearFill className={styles.navigator_icon} /> : <BsGear className={styles.navigator_icon} />}
          </Link>
        </li>
      </ul>
    </nav>
  )
}