import {NAVBAR_ICONS} from "../../atoms/icons/navbar-icons/navbar-icons.list.tsx";


export interface NavbarButtonDescription{
    icon:NAVBAR_ICONS
    iconHover:NAVBAR_ICONS
    text: string
    link : string
    secondBar ?: NavbarButtonDescription[]
}

export const navbarButtonsList: NavbarButtonDescription[] = [
    {
        icon:NAVBAR_ICONS.companies,
        iconHover:NAVBAR_ICONS.companiesHover,
        text: "společnost",
        link:"company"
    },
    {
        icon:NAVBAR_ICONS.team,
        iconHover:NAVBAR_ICONS.teamHover,
        text: "tým",
        link:"team"

    },
    {
        icon:NAVBAR_ICONS.contacts,
        iconHover:NAVBAR_ICONS.contactsHover,
        text: "kontakty",
        link:"contacts"
    },
    {
        icon:NAVBAR_ICONS.projects,
        iconHover:NAVBAR_ICONS.projectsHover,
        text: "projekty",
        link:"projects"
    },
    {
        icon:NAVBAR_ICONS.accounting,
        iconHover:NAVBAR_ICONS.accountingHover,
        text: "účetnictví",
        link:"accounting/info",
        secondBar: [
            {
                icon:NAVBAR_ICONS.info,
                iconHover:NAVBAR_ICONS.infoHover,
                text: "info",
                link:"accounting/info"
            },
            {
                icon:NAVBAR_ICONS.invoice,
                iconHover:NAVBAR_ICONS.invoiceHover,
                text: "cenové nabítky",
                link:"accounting/offers"

            },
            {
                icon:NAVBAR_ICONS.invoice,
                iconHover:NAVBAR_ICONS.invoiceHover,
                text: "objednávky",
                link:"accounting/orders"
            },
            {
                icon:NAVBAR_ICONS.invoice,
                iconHover:NAVBAR_ICONS.invoiceHover,
                text: "faktury",
                link:"accounting/invoices"
            },
            {
                icon:NAVBAR_ICONS.invoice,
                iconHover:NAVBAR_ICONS.invoiceHover,
                text: "přijaté faktury",
                link:"accounting/costs"
            },
            {
                icon:NAVBAR_ICONS.book,
                iconHover:NAVBAR_ICONS.bookHover,
                text: "kniha",
                link:"accounting/book"
            }
        ]

    }
]
