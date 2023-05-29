
export default function FooterLinksList(props) {

    return (
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
                    footer.links.map((linksData, index) => (
                        <tr>
                        <td>{linksData?.name}</td>
                        <td>{linksData?.link}</td>
                        <td>{footer?.heading}</td>
                        <td><button onClick={() => props.updateFooterLinks(index, footer.id)}>Edit</button></td>
                        <td><button onClick={() => props.deleteFooterLink(index, footer.id)}>Delete</button></td>
                    </tr>
                    ))
                ))
            }



        </table>
    );
}
