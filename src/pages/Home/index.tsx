import styles from './styles.module.scss';
import { HomeBanner } from './components/Banner';
import { HomeAbout } from './components/About';
import { HomeHeader } from './components/Header';
import { HomeBio } from './components/Bio';
import { HomeFindMe } from './components/FindMe';
import { HomeFooter } from './components/Footer';


export function Home() {
    return (
        <main className={styles.main}>
            <HomeHeader />
            <HomeBanner />
            <HomeAbout />
            <HomeBio />
            <HomeFindMe />
            <HomeFooter />
        </main>
    )
}