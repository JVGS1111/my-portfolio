import { HomeBanner } from './components/Banner';
import { HomeAbout } from './components/About';
import { HomeHeader } from './components/Header';
import { HomeBio } from './components/Bio';


export function Home() {
    return (
        <main>
            <HomeHeader />
            <HomeBanner />
            <HomeAbout />
            <HomeBio />
        </main>
    )
}