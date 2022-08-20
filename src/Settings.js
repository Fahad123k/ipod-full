import React from 'react';


class Settings extends React.Component{

    constructor(){
        super();
    }

    render(){
        let self = this;
        return(
            <div style={styles.settings} >
            <img style={styles.image}/>
            {/* <img style={styles.image} src="https://image.flaticon.com/icons/svg/929/929435.svg" /> */}
        </div>
        );
    }

}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    image : {
        width:'75%',
        height:'75%',
        alignSelf : 'center'
    }
}

export default Settings; 