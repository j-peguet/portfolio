import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './css/work.module.css';

const works = [
    {
        title: 'Developer',
        companie: 'Sopra Steria',
        date: {
            from: 'September 2019',
            to: '??'
        },
        description:(
            <>
              Developer for Sopra Steria, participating in more diverse projects (client tool, website, ETL) for various clients (Bouygues Immobilier, EDF, RTE).
            </>
        )
    },
    {
        title: 'Website design',
        companie: 'Destyl',
        date: {
            from: 'January',
            to: 'February  2019'
        },
        description:(
            <>
              Design and creation of a website for a carpenter, <code><a href="https://destyl.fr" target="_blank">destyl.fr</a></code>.
            </>
        )
    },
    {
        title: 'Dev',
        companie: 'Le temple du Jeu',
        date: {
            from: 'June',
            to: 'July 2018'
        },
        description:(
            <>
              Development of a website for board game events. 
              A mobile playing card booking application, for the company <code><a href="https://www.letempledujeu.fr/" target="_blank">le temple du jeu</a></code>.
            </>
        )
    },
]

function Work({title, companie, date, description}){
    return (
        <div>
          <h3>{title}</h3>
          <p>{companie}</p>
          <p>{date.from} -- {date.to}</p>
          <p>{description}</p>
          <hr className={styles.line}/>
        </div>
    );
}

function Works() {
    return(
        <section className={styles.works}>
            <div className="container">
                <div className="row">
                    <h1>Jobs</h1>
                </div>
                <div className="row">
                    <div className={clsx('col col--6', styles.imageContainer)}>
                        <img className={styles.workImage} src={useBaseUrl('img/undraw_town.svg')} />
                    </div>
                    <div className="col col--6">
                        {works.map((props, idx) => (
                            <Work key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Works