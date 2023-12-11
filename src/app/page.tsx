import Image from 'next/image';

import GridSectionImage1 from '../../public/images/gridSection/image1.png';
import GridSectionImage2 from '../../public/images/gridSection/image2.png';
import GridSectionLogo from '../../public/images/gridSection/logo.png';

import TextSection from './components/TextSection';

import styles from './index.module.scss';

export default function Home() {
  return (
    <main className={styles['wrapper']}>
      <TextSection
        ctaButton={{
          href: '/posts',
          title: 'Zobacz więcej',
        }}
        subtitle="Czyli kim jesteśmy i dokąd zmierzamy"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      mollitia, molestiae quas vel sint commodi repudiandae consequuntur
      voluptatum laborum numquam blanditiis harum quisquam eius sed odit
      fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
      accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
      molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
      officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
      nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
      error repudiandae fuga? Ipsa laudantium molestias eos sapiente
      officiis modi at sunt excepturi expedita sint? Sed quibusdam
      recusandae alias error harum maxime adipisci amet laborum.
      Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
      cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit
      doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
      deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
      velit hic maxime doloremque. Quaerat provident commodi consectetur
      veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates
      pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
      excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
      Voluptatem quaerat non architecto ab laudantium modi minima sunt esse
      temporibus sint culpa, recusandae aliquam numquam totam ratione
      voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
      aliquam eligendi, placeat qui corporis!"
        title="Kilka słów o nas"
      />

      <section className={styles['grid-section']}>
        <Image
          alt="logo"
          className={styles['grid-section__item']}
          src={GridSectionLogo}
        />
        <Image
          alt="diy"
          className={styles['grid-section__item']}
          src={GridSectionImage1}
        />
        <Image
          alt="happy family"
          className={styles['grid-section__item']}
          src={GridSectionImage2}
        />
        <div
          className={[
            styles['grid-section__item'],
            styles['grid-section__text-item'],
          ].join(' ')}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
        </div>
      </section>

      <TextSection
        ctaButton={{
          href: '/posts',
          title: 'Zobacz więcej',
        }}
        subtitle="Dowiedz się co mozemy tobie zaoferować"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      mollitia, molestiae quas vel sint commodi repudiandae consequuntur
      voluptatum laborum numquam blanditiis harum quisquam eius sed odit
      fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
      accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
      molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
      officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
      nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
      error repudiandae fuga? Ipsa laudantium molestias eos sapiente
      officiis modi at sunt excepturi expedita sint? Sed quibusdam
      recusandae alias error harum maxime adipisci amet laborum.
      Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
      cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit
      doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
      deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
      velit hic maxime doloremque. Quaerat provident commodi consectetur
      veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates
      pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
      excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
      Voluptatem quaerat non architecto ab laudantium modi minima sunt esse
      temporibus sint culpa, recusandae aliquam numquam totam ratione
      voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
      aliquam eligendi, placeat qui corporis!"
        title="Nasza ofera"
      />

      <section className={styles['image-background-section']}>
        <ul>
          <li>Budowa domów z drewna</li>
          <li>Budowa bram wjazdowych</li>
          <li>Wykończenie wnętrz</li>
          <li>Altany ogrodowe</li>
          <li>Kamienne elementy architektury</li>
          <li>Remonty</li>
        </ul>
      </section>
    </main>
  );
}
