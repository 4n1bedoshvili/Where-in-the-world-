export default function Header(){
    return(
        <div style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            backgroundColor:'white',
            boxShadow:'-4px -5px 15px -5px #242424',
            padding:'0 5%',
            position:'fixed',
            top:'0',
            width:'100vw',
            boxSizing:'border-box',
            zIndex:'1000',
            height:'65px'
        }}>
            <h1 style={{cursor:'pointer'}}>Where in the world?</h1>
            <span style={{cursor:'pointer'}}>Dark Mode</span>
        </div>
    )
}