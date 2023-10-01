//Main bar icons
import CompanyLogo  from '../../../assets/navbar-icons/compagny.svg';
import CompanyLogoHover from '../../../assets/navbar-icons/compagny_hover.svg';
import TeamLogo from '../../../assets/navbar-icons/team.svg';
import TeamLogoHover from '../../../assets/navbar-icons/team_hover.svg';
import ContactLogo from '../../../assets/navbar-icons/contacts.svg';
import ContactLogoHover from '../../../assets/navbar-icons/contacts_hover.svg';
import ProjectsLogo from '../../../assets/navbar-icons/projects.svg';
import ProjectsLogoHover from '../../../assets/navbar-icons/projects_hover.svg';
import AccountingLogo from '../../../assets/navbar-icons/account.svg';
import AccountingLogoHover from '../../../assets/navbar-icons/account_hover.svg';

//accounting bar icons
import InfoLogo from '../../../assets/navbar-icons/info.svg';
import InfoLogoHover from '../../../assets/navbar-icons/info_hover.svg';
import OfferLogo from '../../../assets/navbar-icons/offer.svg';
import OfferLogoHover from '../../../assets/navbar-icons/offer_hover.svg';
import OrderLogo from '../../../assets/navbar-icons/invoice.svg';
import OrderLogoHover from '../../../assets/navbar-icons/invoice_hover.svg';
import InvoiceLogo from '../../../assets/navbar-icons/invoice.svg';
import InvoiceLogoHover from '../../../assets/navbar-icons/invoice_hover.svg';
import CostsLogo from '../../../assets/navbar-icons/received-invoices.svg';
import CostsLogoHover from '../../../assets/navbar-icons/received-invoices_hover.svg';
import BookLogo from '../../../assets/navbar-icons/book.svg';
import BookLogoHover from '../../../assets/navbar-icons/book_hover.svg';

export interface NavbarButtonDescription{
    icon:string
    iconHover:string
    text: string,
    link : string,
    secondBar ?: NavbarButtonDescription[]
}

export const navbarButtonsList: NavbarButtonDescription[] = [
    {
        icon:CompanyLogo,
        iconHover:CompanyLogoHover,
        text: "společnost",
        link:"company"
    },
    {
        icon:TeamLogo,
        iconHover:TeamLogoHover,
        text: "tým",
        link:"team"

    },
    {
        icon:ContactLogo,
        iconHover:ContactLogoHover,
        text: "kontakty",
        link:"contacts"
    },
    {
        icon:ProjectsLogo,
        iconHover:ProjectsLogoHover,
        text: "projekty",
        link:"projects"
    },
    {
        icon:AccountingLogo,
        iconHover:AccountingLogoHover,
        text: "účetnictví",
        link:"accounting/info",
        secondBar: [
            {
                icon:InfoLogo,
                iconHover:InfoLogoHover,
                text: "info",
                link:"accounting/info"
            },
            {
                icon:OfferLogo,
                iconHover:OfferLogoHover,
                text: "cenové nabítky",
                link:"accounting/offers"

            },
            {
                icon:OrderLogo,
                iconHover:OrderLogoHover,
                text: "objednávky",
                link:"accounting/orders"
            },
            {
                icon:InvoiceLogo,
                iconHover:InvoiceLogoHover,
                text: "faktury",
                link:"accounting/invoices"
            },
            {
                icon:CostsLogo,
                iconHover:CostsLogoHover,
                text: "přijaté faktury",
                link:"accounting/costs"
            },
            {
                icon:BookLogo,
                iconHover:BookLogoHover,
                text: "kniha",
                link:"accounting/book"
            }
        ]

    }
]
