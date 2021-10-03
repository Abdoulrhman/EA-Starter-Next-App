import React, { useState } from 'react'
import Divider from '../../../../common/components/Atoms/Divider'
import styles from './styles.module.scss'

function Specifications() {
    const [specifications, setSpecifications] = useState({
        ViewTypeId: 2,
        Collapsed: false,
        EnableCollapse: true,
        OptionGroups: [
            {
                Id: 1,
                Title: "Make",
                ImageUrl: "https://cdn.emiratesauction.com/static/AppsAssets/CarSpecs/make.png?v=1",
                Order: 0,
                Value: "Lexus"
            },
            {
                Id: 2,
                Title: "Model",
                ImageUrl: "https://cdn.emiratesauction.com/static/AppsAssets/CarSpecs/model.png?v=1",
                Order: 0,
                Value: "LX 570"
            },
            {
                Id: 3,
                Title: "Year",
                ImageUrl: "https://cdn.emiratesauction.com/static/AppsAssets/CarSpecs/year.png?v=1",
                Order: 0,
                Value: "2016"
            },
            {
                Id: 4,
                Title: "Keys",
                ImageUrl: "https://cdn.emiratesauction.com/static/AppsAssets/CarSpecs/keys.png?v=2",
                Order: 0,
                Value: "2"
            },
            {
                Id: 5,
                Title: "Exterior",
                ImageUrl: "https://cdn.emiratesauction.com/static/AppsAssets/CarSpecs/exterior.png?v=1",
                Order: 0,
                Value: "White"
            },
            {
                Id: 6,
                Title: "Doors",
                ImageUrl: "https://cdn.emiratesauction.com/static/AppsAssets/CarSpecs/doors.png?v=1",
                Order: 0,
                Value: "4"
            },
            {
                Id: 7,
                Title: "Transmission",
                ImageUrl: "https://cdn.emiratesauction.com/static/AppsAssets/CarSpecs/trans.png?v=1",
                Order: 0,
                Value: "Automatic"
            },
            {
                Id: 8,
                Title: "Odometer",
                ImageUrl: "https://cdn.emiratesauction.com/static/AppsAssets/CarSpecs/odometer.png?v=1",
                Order: 0,
                Value: "64,054 Km"
            },
            {
                Id: 9,
                Title: "Fuel Type",
                ImageUrl: "https://cdn.emiratesauction.com/static/AppsAssets/CarSpecs/fuel.png?v=1",
                Order: 0,
                Value: "Petrol"
            },
            {
                Id: 15,
                Title: "Vin number",
                ImageUrl: "",
                Order: 0,
                Value: "****188544"
            },
            {
                Id: 16,
                Title: "Trim",
                ImageUrl: "",
                Order: 0,
                Value: ""
            },
            {
                Id: 17,
                Title: "Body Type",
                ImageUrl: "",
                Order: 0,
                Value: "Station"
            },
            {
                Id: 18,
                Title: "Country of Made",
                ImageUrl: "",
                Order: 0,
                Value: "Japan"
            },
            {
                Id: 19,
                Title: "Interior",
                ImageUrl: "",
                Order: 0,
                Value: ""
            },
            {
                Id: 20,
                Title: "Seats",
                ImageUrl: "",
                Order: 0,
                Value: "8"
            }
        ],
        Id: 2,
        Title: "SPECIFICATIONS OVERVIEW"
    })

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <p className={styles.headTitle}>{specifications.Title}</p>
                <img src="/assets/icons/arrow-up.svg" alt="arrow" />
            </div>
            <Divider width="100%" height="1px" bgColor="#EDEDED" />
            <div className={styles.contentContainer} >
                <ul className={styles.optionsContainer}>
                    {specifications.OptionGroups.map(
                        (o, indx) =>
                        (
                            <li className={styles.itemsContainer} key={indx} >
                                <p className={styles.itemTitle}>{o.Title}</p>
                                <img src={o.ImageUrl} alt="icon" />
                                <p className={styles.itemSubTitle}>{o.Value}</p>
                            </li>
                        )
                    )}
                </ul>
                <Divider width="100%" height="1px" bgColor="#EDEDED" margin="15px 0" />
                <ul className={styles.footer}>
                    <li className={styles.footerItem}>
                        <p>Vin number</p>
                        <p>WP0ZZZ99ZHS162313</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Specifications
