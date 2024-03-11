import Feature from '../../components/Feature'
import Hero from '../../components/Hero'
import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png'
import iconSecurity from '../../assets/icon-security.png'

const Home = () => {
  const features = [
    {
      src: iconChat,
      title: 'You are our #1 priority',
      alt: 'Chat Icon',
      desc: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      src: iconMoney,
      alt: 'Chat Icon',
      title: 'More savings means higher rates',
      desc: 'The more you save with us, the higher your interest rate will be!',
    },
    {
      src: iconSecurity,
      alt: 'Chat Icon',
      title: 'Security you can trust',
      desc: 'We use top of the line encryption to make sure your data and money is always safe.',
    },
  ]
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((feature, index) => {
          return (
            <Feature
              key={index}
              alt={feature.alt}
              src={feature.src}
              title={feature.title}
              desc={feature.desc}
            />
          )
        })}
      </section>
    </main>
  )
}

export default Home
