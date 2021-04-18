import {IonIcon} from "@ionic/react";

type HeaderProps ={
    name: string,
    icon: any
}

const Header = ({name, icon}: HeaderProps) => {
    return (
        <div>
            <IonIcon style={{width: "5%", float: "left", marginTop: "5px" , fontSize: "30px"}}
                     icon={icon}/>
            <h2>{name}</h2>
        </div>)
}

export default Header
