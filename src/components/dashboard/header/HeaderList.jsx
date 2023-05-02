
export default function HeaderList(props) {
    return (
        <ul>
            {
                props.navList.length > 0 && props.navList.map((navListData, index) => (
                    <li key={index}>{navListData}{' '} <button onClick={() => props.deleteNav(index)}>Delete</button>
                        {' '} <button onClick={() => props.updateNav(index, navListData)}>Update</button>
                    </li>
                ))
            }
        </ul>
    );
}
