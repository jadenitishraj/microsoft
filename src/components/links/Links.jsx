export default function Links() {

  const footerLinks = [
    {
      heading: "What's new",
      links: [
        { name: "Surface Duo", link: "http://www.google.com" },
        { name: "Surface Laptop Go", link: "http://www.google.com" },
        { name: "Surface Pro X", link: "http://www.google.com" },
      ]
    },
    {
      heading: "Microsoft Store",
      links: [
        { name: "Account profile", link: "http://www.google.com" },
        { name: "Download Center", link: "http://www.google.com" },
        { name: "Microsoft Store support", link: "http://www.google.com" },
      ]
    },

    {
      heading: "Education",
      links: [
        { name: "Microsoft in education", link: "http://www.google.com" },
        { name: "Office for students", link: "http://www.google.com" },
        { name: "Office 365 for schools", link: "http://www.google.com" },
      ]
    },
  ]


  return (
    <section className="links container">
      <div className="links-inner">


        {

          footerLinks.map((footerLink) => (
            <ul>
              <li>
                <h3>{footerLink.heading}</h3>
              </li>
              {
                footerLink.links.map((linksData) => (
                  <li>
                    <a href={linksData.link}>{linksData.name}</a>
                  </li>
                ))
              }
            </ul>
          ))

        }


      </div>
    </section>
  );
}
