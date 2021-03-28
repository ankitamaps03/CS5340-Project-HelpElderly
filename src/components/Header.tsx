import {IonIcon} from "@ionic/react";

type HeaderProps ={
    name: string,
    icon: any
}

const Header = ({name, icon}: HeaderProps) => {
    return (
        <div>
            <IonIcon style={{width: "5%", float: "left", marginTop: "7px"}}
                     icon={icon}/>
            <h2>{name}</h2>
        </div>)
}

export default Header
