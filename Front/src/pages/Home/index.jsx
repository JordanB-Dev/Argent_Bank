import Feature from '../../components/Feature'
import Hero from '../../components/Hero'
import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png'
import iconSecurity from '../../assets/icon-security.png'

const Home = () => {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
          src={iconChat}
          alt="Chat Icon"
          title="You are our #1 priority"
          desc="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          src={iconMoney}
          alt="Chat Icon"
          title="More savings means higher rates"
          desc="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          src={iconSecurity}
          alt="Chat Icon"
          title="Security you can trust"
          desc="We use top of the line encryption to make sure your data and money
          is always safe."
        />
      </section>
    </main>
  )
}

export default Home
