import Image from 'next/image'
import styles from './page.module.css'
import ShowChats from '@/components/chats/ShowChats'

export default function Home() {
  return (
    <>
      <ShowChats />
      <div>
        Chat
      </div>
    </>
  )
}
