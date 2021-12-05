import Layout from '../components/layoutComponent'
import PirateCode from '../components/pirateCodeComponent'
import Roadmap from '../components/roadmapComponent'
import LandingBanner from '../components/landingBannerComponent'
import Description from '../components/descriptionComponent'
import Team from '../components/teamComponent'
import JoinUsBanner from '../components/joinUsBannerComponent'

export default function Home() {
  return (
    <div>
      <Layout >
        <LandingBanner />
        <Description />
        <PirateCode />
        <Roadmap />
        <Team />
        <JoinUsBanner />
      </Layout >
    </div>
  )
}
