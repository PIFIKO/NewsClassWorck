import Link from "next/link";
import { useRouter } from "next/router";

import style from './Nav.module.scss'

const navigation = [
    { id: 1, title: 'війна', path: '/war' },
    { id: 2, title: 'новини', path: '/news' },
    { id: 3, title: 'політика', path: '/politics' },
    { id: 4, title: 'економіка', path: '/economics' },
    { id: 5, title: 'погляди', path: '/views' },
    { id: 6, title: 'світ', path: '/world' },
  ];


const Nav = () =>{

    const { pathname } = useRouter();

    return(
        <nav className={style.headNav}>
            <div className= {style.container}>
                <ul className ={style.headNavList}>
                    {navigation.map(({ id, title, path }) => (
                        <Link key={id} href={path}>
                            <li className={pathname === path ? style.active : null}> <img src="/svg/Vector.svg" alt="fire" /> {title}</li>
                        </Link>
                    ))}
                </ul>
                <div className={style.live}>
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className={style.dotOne} cx="6" cy="6.5" r="6" fill="#E04646" fillOpacity="0.6"/>
                    <circle className={style.dotTwo} cx="6" cy="6.5" r="3" fill="#E04646"/>
                </svg>
                    <div className={style.liveDescri}>LIVE</div>
                </div>
            </div>
        </nav>
        
    )
}

export default Nav