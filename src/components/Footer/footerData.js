import locationImg from '../../img/footer/location.svg'
import phoneImg from '../../img/footer/phone.svg'
import emailImg from '../../img/footer/email.svg'

const footerData = [
    {
        header: 'footer.bottom.footerData.column1.header',
        links: [
            {
                url: "#",
                text: 'footer.bottom.footerData.column1.links.text1',
            },{
                url: "#",
                text: 'footer.bottom.footerData.column1.links.text2',
            },{
                url: "#",
                text: 'footer.bottom.footerData.column1.links.text3',
            },{
                url: "#",
                text: 'footer.bottom.footerData.column1.links.text4',
            },{
                url: "#",
                text: 'footer.bottom.footerData.column1.links.text5',
            },
        ]
    },
    {
        header: 'footer.bottom.footerData.column2.header',
        links: [
            {
                url: "#about",
                text: 'footer.bottom.footerData.column2.links.text1',
            },{
                url: "#services",
                text: 'footer.bottom.footerData.column2.links.text2',
            },{
                url: "#choose",
                text: 'footer.bottom.footerData.column2.links.text3',
            },{
                url: "#contact",
                text: 'footer.bottom.footerData.column2.links.text4',
            },
        ]
    },
    {
        header: 'footer.bottom.footerData.column3.header',
        links: [
            {
                icon: locationImg,
                url: "#",
                text: 'Tirana, Albanien',
            },{
                icon: phoneImg,
                url: "#",
                text: '+41 44 551 40 01',
            },{
                icon: emailImg,
                url: "#",
                text: 'info@alpineedge.ch',
            }
        ]
    }
];

export default footerData