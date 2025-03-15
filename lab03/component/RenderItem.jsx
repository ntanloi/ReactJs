export default function RenderItem({array}){
    return (
        <ul className="ulinRender">
            {
                array.map(
                    (item, index)=>{
                        return(
                            <li key={index} style={{ width: '100px' }}>{item}</li>
                        )
                    }
                )
            }
        </ul>
    )
}