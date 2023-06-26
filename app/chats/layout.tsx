import HeaderChats from '@/components/chats/HeaderChats'
import styles from './chats.module.scss'
import ShowChats from "@/components/chats/ShowChats"

export const metadata = {
  title: 'Sprint chat | Chats',
  description: 'Messaging web app',
}

export default function ChatsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={styles.chats}>
      <div className={styles['chats-container']}>
        <HeaderChats />

        <ShowChats />
      </div>
      {children}
    </section>
  )
}