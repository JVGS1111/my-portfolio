import { HomeBanner } from './components/Banner';
import { HomeBio } from './components/Bio';
import { HomeHeader } from './components/Header';


export function Home() {
    return (
        <main>
            <HomeHeader />
            <HomeBanner />
            <HomeBio />
        </main>
    )
}