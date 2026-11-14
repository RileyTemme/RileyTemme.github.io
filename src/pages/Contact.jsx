const mainStyle = {
  maxWidth: "700px",
  margin: "0 auto",
  padding: "2rem 1.5rem",
  textAlign: "center"
}

const contactInfo = [
  { label: "Email", value: "riley.temme@gmail.com", href: "riley.temme@gmail.com  " },
  { label: "GitHub", value: "github.com/RileyTemme", href: "https://github.com/RileyTemme" },
  { label: "LinkedIn", value: "linkedin.com/in/riley-temme", href: "https://www.linkedin.com/in/riley-temme-b63299404" }
]

function Contact() {
  return (
    <main style={mainStyle}>
      <h2>Contact</h2>
      <ul className="contact-list">
        {contactInfo.map(({ label, value, href }) => (
          <li key={label}>
            <a className="contact-item" href={href}>
              <span className="contact-item__label">{label}</span>
              <span>{value}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Contact
