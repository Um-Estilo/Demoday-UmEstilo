import React from 'react';



function PreferenciasPin(props){
    return(
        
        <div style={{
            ...styles.img,
            ...styles[props.size]

        }}> 

        </div>
    )
}

const styles = {

    img: {
        margin: 3,
        paddin:0,
        borderRadius: '18px',
        backgroundColor: 'WHITE'
    },

    small:{
        gridRowEnd: 'span 24',
        backgroundImage: "url('https://i.pinimg.com/236x/3d/33/8e/3d338ef2116193218379bbd588392382.jpg')",
    },

    small1:{
        gridRowEnd: 'span 24',
        backgroundImage: "url('https://i.pinimg.com/236x/c1/de/37/c1de37c7d2d42f899a9f21ff20c1151b.jpg')",
    },

    small2:{
        gridRowEnd: 'span 24',
        backgroundImage: "url('https://i.pinimg.com/236x/2d/36/6c/2d366c32a3abb6ac9ed880ccce5e9ab5.jpg')",
    },

    small3:{
        gridRowEnd: 'span 24',
        backgroundImage: "url('https://i.pinimg.com/236x/92/33/a0/9233a0b5c42fcb83281810a7048f5bdf.jpg')",
    },

    small4:{
        gridRowEnd: 'span 24',
        backgroundImage: "url('https://i.pinimg.com/236x/db/82/93/db8293e1df0ed04ec63b5e3872c42b66.jpg')",
    },

    small5:{
        gridRowEnd: 'span 24',
        backgroundImage: "url('https://i.pinimg.com/236x/4e/a0/e6/4ea0e62b473af092af78befe9dadcb2f.jpg')",
    },

    small6:{
        gridRowEnd: 'span 24',
        backgroundImage: "url('https://i.pinimg.com/236x/5f/ca/c1/5fcac19ff60ec3e592396a46472b84cb.jpg')",
    },

    medium:{
        gridRowEnd: 'span 30',
        backgroundImage: "url('https://i.pinimg.com/236x/44/4d/a0/444da0a079bcaab8fd406b5539209556.jpg')",
    },
    
    medium1:{
        gridRowEnd: 'span 30',
        backgroundImage: "url('https://i.pinimg.com/236x/c1/8b/4d/c18b4df369bc104ac0cc6201ecec2bfc.jpg')",
    },
    
    medium2:{
        gridRowEnd: 'span 30',
        backgroundImage: "url('https://i.pinimg.com/236x/bd/6f/a2/bd6fa294454294b143a227624f1584f1.jpg')",
    },
    
    medium3:{
        gridRowEnd: 'span 30',
        backgroundImage: "url('https://i.pinimg.com/236x/8c/ad/b9/8cadb99e6be08605283672fd7f4a621f.jpg')",
    },

    medium4:{
        gridRowEnd: 'span 30',
        backgroundImage: "url('https://i.pinimg.com/236x/34/6f/06/346f06402a381414c88aa023809802d1.jpg')",
    },

    medium5:{
        gridRowEnd: 'span 30',
        backgroundImage: "url('https://i.pinimg.com/236x/5d/89/ba/5d89ba990a4ce9270845189650954ccc.jpg')",
    },

    medium6:{
        gridRowEnd: 'span 30',
        backgroundImage: "url('https://i.pinimg.com/236x/19/24/97/1924975dfe285e93111c52d8d22c6184.jpg')",
    },

    medium7:{
        gridRowEnd: 'span 30',
        backgroundImage: "url('https://i.pinimg.com/236x/41/61/3c/41613c13f7214083610f6fef8f77adb5.jpg')",
    },

    medium8:{
        gridRowEnd: 'span 30',
        backgroundImage: "url('https://i.pinimg.com/236x/31/d2/20/31d22075a8ab12bf840e18df833bb93b.jpg')",
    },

    medium9:{
        gridRowEnd: 'span 30',
        backgroundImage: "url('https://i.pinimg.com/236x/68/1c/db/681cdbcfd4167e820a448918fbf6731b.jpg')",
    },
    
    large:{
        gridRowEnd: 'span 43',
        backgroundImage: "url('https://i.pinimg.com/236x/2f/92/92/2f9292a13420cd129e8a9ba193d2ee5b.jpg')",
    },

    large1:{
        gridRowEnd: 'span 43',
        backgroundImage: "url('https://i.pinimg.com/236x/2f/92/92/2f9292a13420cd129e8a9ba193d2ee5b.jpg')",
    },

    large2:{
        gridRowEnd: 'span 43',
        backgroundImage: "url('https://i.pinimg.com/236x/da/46/90/da469048cadbfdda5818e1ac4c878c7d.jpg')",
    },

    large3:{
        gridRowEnd: 'span 43',
        backgroundImage: "url('https://i.pinimg.com/236x/ba/a4/ae/baa4aeebe776bc7ea4051a0308a3517d.jpg')",
    },

    large4:{
        gridRowEnd: 'span 43',
        backgroundImage: "url('https://i.pinimg.com/236x/3d/cb/c8/3dcbc8ae211c6442626323624de86e39.jpg')",
    },

    large5:{
        gridRowEnd: 'span 43',
        backgroundImage: "url('https://i.pinimg.com/236x/4e/8f/66/4e8f66863fdd2165174917805bde724b.jpg')",
    },

    large6:{
        gridRowEnd: 'span 43',
        backgroundImage: "url('https://i.pinimg.com/236x/31/77/3d/31773dd2bfa928deabce93449a097bc4.jpg')",
    },

    large7:{
        gridRowEnd: 'span 38',
        backgroundImage: "url('https://i.pinimg.com/236x/aa/54/9e/aa549e6d32a8effc622c2c6830061d9f.jpg')",
    },
}

export default PreferenciasPin;