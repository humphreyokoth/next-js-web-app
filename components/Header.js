import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>

        <h1 className={headerStyles.title}> <span>Edu </span>Updates</h1>
        <p className={headerStyles.description}> Edu fullstack updates</p>
    </div>
  )
}

export default Header