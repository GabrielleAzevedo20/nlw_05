import '../styles/global.scss'

import { Header } from '../Components/Header'
import { Player } from '../Components/Player'

import styles from '../styles/App.module.scss'
import { PlayerContextProvider } from '../contexts/PlayerContext'


function MyApp({ Component, pageProps }) {

  return (
    <PlayerContextProvider>
    <div className={styles.appWrapper}>
      <main>
      <Header />
      <Component {...pageProps} />
      </main>
      <Player />
    </div>
    </PlayerContextProvider>
  )
}

export default MyApp
