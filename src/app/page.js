import styles from './page.module.scss'
import Image from 'next/image';
import Header from '../components/header';
import MastHead from '../components/masthead'
import Oinks from '../components/oinks'
import Oinks2 from '../components/oinks2'
import Footer from '../components/footer'


export default function Home() {
  return (
    <main>
      <Header />
      <Oinks />
      <Oinks2 />
      <Footer />

    </main>
  )
}
