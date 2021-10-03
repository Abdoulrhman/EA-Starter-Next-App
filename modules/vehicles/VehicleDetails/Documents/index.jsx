import React, { useState } from 'react'
import Divider from '../../../../common/components/Atoms/Divider'
import styles from './styles.module.scss'

function Documents() {
    const [documents, setDocuments] = useState({
        ViewTypeId: 3,
        Collapsed: false,
        EnableCollapse: true,
        OptionGroups: [
            {
                Link: "https://cdn.emiratesauction.com/media/w425appauohpwarwx7q5indb460v5selm0sm3rq6khf9p23pq/221276.pdf",
                Title: "Inspection Report"
            },
            {
                Link: "https://cdn.emiratesauction.com/media/w425appauohpwarwx7q5indb460v5selm0sm3rq6khf9p23pq/221276.pdf",
                Title: "Inspection Report"
            }
        ],
        Id: 4,
        Title: "DOCUMENTS"
    })

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <p className={styles.headTitle}>{documents.Title}</p>
                <img src="/assets/icons/arrow-up.svg" alt="arrow" />
            </div>
            <Divider width="100%" height="1px" bgColor="#EDEDED" />
            <div className={styles.contentContainer} >
                {documents.OptionGroups.map(
                    (o, indx) =>
                    (
                        <div className={styles.itemsContainer} key={indx}>

                            <p className={styles.optionTitle}>{o.Title}</p>
                            <button className={styles.btnView}>View</button>
                        </div>

                    )
                )}
            </div>
        </div>
    )
}

export default Documents
