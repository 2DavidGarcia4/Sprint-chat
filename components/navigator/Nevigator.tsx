import styles from './navigator.module.scss'

import Link from 'next/link'
import { BsChatLeftText, BsChatLeftTextFill } from 'react-icons/bs'
import { RiContactsLine, RiContactsFill } from 'react-icons/ri'
import { HiOutlineUser, HiUser } from 'react-icons/hi'
import { BsGear, BsGearFill } from 'react-icons/bs'

export default function Navigator(){
  return (
    <nav className={styles.navigator}>
      <ul className={styles.navigator_elements}>
        <li className={`${styles.navigator_elements_item} ${styles.selected}`}>
          <Link href={'/'}>
            {true ? <BsChatLeftTextFill className={styles.navigator_icon} /> : <BsChatLeftText className={styles.navigator_icon} />}
          </Link>
        </li>
        <li className={styles.navigator_elements_item}>
          <Link href={'/me'} className={styles.navigator_elements_user}>
            {
              true ?
              (false ? <HiUser className={styles.navigator_icon} /> : <HiOutlineUser className={styles.navigator_icon} />) :
              <img src="" alt="" />
            }
            <div className={styles.navigator_elements_user_status} style={{backgroundColor: 'green'}}>
              
            </div>
          </Link>
        </li>
        <li className={styles.navigator_elements_item}>
          <Link href={'/friends'}>
            {false ? <RiContactsFill className={styles.navigator_icon} /> : <RiContactsLine className={styles.navigator_icon} />}
          </Link>
        </li>
        <li className={styles.navigator_elements_item}>
          <Link href={'/settings'}>
            {false ? <BsGearFill className={styles.navigator_icon} /> : <BsGear className={styles.navigator_icon} />}
          </Link>
        </li>
      </ul>
    </nav>
  )
}