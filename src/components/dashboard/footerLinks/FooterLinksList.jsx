
export default function FooterLinksList(props) {

    return (
        // <ul>
        //     {
        //         props.navList.length > 0 && props.navList.map((navListData, index) => (
        //             <li key={navListData.id}>{navListData.heading}{' '} <button onClick={() => props.deleteNav(navListData.id)}>Delete</button>
        //                 {' '} <button onClick={() => props.updateNav(navListData.id, navListData.heading)}>Update</button>
        //             </li>
        //         ))
        //     }
        // </ul>

        <table>
            <tr>
                <th>Link Name</th>
                <th>Link URL</th>
                <th>Heading</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>

            {
                props.footerData.map((footer) => (
                    footer.links.map((linksData) => (
                        <tr>
                        <td>{linksData.name}</td>
                        <td>{linksData.link}</td>
                        <td>{footer.heading}</td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                    ))
                ))
            }



        </table>
    );
}
