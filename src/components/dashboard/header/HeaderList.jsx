
export default function HeaderList(props) {

    console.log(props.navList);

    return (
        <ul>
            {
                props.navList.length > 0 && props.navList.map((navListData, index) => (
                    <li key={navListData.id}>{navListData.menu_name}{' '} <button onClick={() => props.deleteNav(navListData.id)}>Delete</button>
                        {' '} <button onClick={() => props.updateNav(navListData.id, navListData.menu_name)}>Update</button>
                    </li>
                ))
            }
        </ul>
    );
}
