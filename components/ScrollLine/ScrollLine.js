import style from "./ScrollLine.module.scss";

const ScrollLine = () =>{
    return(
        <div className= {style.ScrollLine}>
            <div className= {style.container}>
                <div className = {style.title} > 131 день війни:</div>
                <ul className={style.infoKill}>
                    <li><img src='/svg/Helmet.svg' alt="" />  особовий склад  &nbsp; <span>~36 200</span></li>
                    <li><img src='/svg/Helmet-1.svg' alt="" />танки  &nbsp; <span>1 589</span></li>
                    <li><img src='/svg/Helmet-2.svg' alt="" />артсистеми  &nbsp;<span>4 578</span></li>
                    <li><img src='/svg/Helmet-3.svg' alt="" />літаки  &nbsp;<span>220</span></li>
                    <li><img src='/svg/Helmet-4.svg' alt="" />РСЗВ  &nbsp;<span>246</span></li>
                    <li><img src='/svg/Helmet-5.svg' alt="" />гелікоптери  &nbsp;<span>190</span></li>
                    <li><img src='/svg/Helmet-1.svg' alt="" />ББМ  &nbsp;<span>4 578</span> </li>
                </ul>
            </div>
        </div>
    );
}

export default ScrollLine;