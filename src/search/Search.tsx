export default function Search(){
    return (
        <div>
            <input style={{
                padding:'10px 30px',
                width:'300px',
                border:'none',
                boxShadow:'0px 0px 10px -5px #242424',
                borderRadius:'5px',
            }} type="text" name="search" id="search" placeholder="Search..." />
            <button style={{
                border:'none',
                backgroundColor:'white',
                boxShadow:'0px 0px 10px -5px #242424',
                padding:'10PX 20PX',
                cursor:'pointer'
            }}>Search</button>
        </div>
    )
}