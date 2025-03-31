import NavItem from './NavItem';

function NavBar() {
    const navItems = ['Pokedex', 'Team Generator', 'Search Pokemon'];

  return (
    <nav className="nav">
        <ul className="nav__list">
            {
                navItems.map((item, index) => {
                    return <NavItem 
                        key={index}
                        text={item}
                    />
                })
            }
        </ul>
    </nav>
  )
}

export default NavBar;
