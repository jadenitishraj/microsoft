
export default function FooterHeadingList(props) {

    return (
        <ul>
            {
                props.navList.length > 0 && props.navList.map((navListData, index) => (
                    <li key={navListData.id}>{navListData.heading}{' '} <button onClick={() => props.deleteNav(navListData.id)}>Delete</button>
                        {' '} <button onClick={() => props.updateNav(navListData.id, navListData.heading)}>Update</button>
                    </li>
                ))
            }
        </ul>
    );
}
