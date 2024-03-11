/* eslint-disable react/prop-types */
const Account = ({ title, price, desc }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title"> {title} </h3>
        <p className="account-amount"> {price} </p>
        <p className="account-amount-description"> {desc} </p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

export default Account
