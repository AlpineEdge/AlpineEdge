import locationImg from '../../img/footer/location.svg'
import phoneImg from '../../img/footer/phone.svg'
import emailImg from '../../img/footer/email.svg'

const footerData = [
    {
        header: 'Dienstleistungen',
        links: [
            {
                url: "#",
                text: 'EU-Regulationen/ISO Standards',
            },{
                url: "#",
                text: 'Cloud Migration',
            },{
                url: "#",
                text: 'Cloud Computing',
            },{
                url: "#",
                text: 'Virtualisation',
            },{
                url: "#",
                text: 'IT Support',
            },
        ]
    },
    {
        header: 'Über uns',
        links: [
            {
                url: "#",
                text: 'Über uns',
            },{
                url: "#",
                text: 'Unsere Dienstleistungen',
            },{
                url: "#",
                text: 'Warum wir',
            },{
                url: "#",
                text: 'Kontaktieren sie uns',
            },
        ]
    },
    {
        header: 'Kontaktdaten',
        links: [
            {
                icon: locationImg,
                url: "#",
                text: 'Tirana, Albanien',
            },{
                icon: phoneImg,
                url: "#",
                text: '(316) 555-0116',
            },{
                icon: emailImg,
                url: "#",
                text: 'info@alpineedge.ch',
            }
        ]
    }
];

export default footerData