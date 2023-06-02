import React from 'react'
import styles from './index.module.scss'


export default function Home() {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <h2 className={styles.title}>안녕하세요 여기는 굵은 글자 입니다.</h2>
      <p>안녕하세요 여기는 가는 글자 입니다.</p>
      <h2 className={styles.title}>the lazy fox jumps over the brown quick dog</h2>
      <p>the lazy fox jumps over the brown quick dog</p>
    </div>
  )
}
