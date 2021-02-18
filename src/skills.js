import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './css/skill.module.css';

const skills = [
    {
        title: 'Front End',
        description:(
            <>
                My favourite category, I have created several websites related to my work or my studies. 
                Using of course functional programming.
            </>
        ),
        logos: ['react', 'vuejs', 'javascript']
    },
    {
        title: 'Back End',
        description:(
            <>
              To create an API between the website and the database. Or an application for fixed stations. Multiple uses, for as many projects.
            </>
        ),
        logos: ['nodejs', 'nestjs', 'rust', 'csharp']
    },
    {
        title: 'Server',
        description:(
            <>
              Because a good developer must also be a good system administrator <code>#DevOps</code>. The use of kubernetes allows me to quickly deploy my applications.
            </>
        ),
        logos: ['kubernetes', 'docker', 'postgresql', 'nginx']
    },
    {
        title: 'Other',
        description:(
            <>
              Non-exhaustive list of tools, languages, ...
            </>
        ),
        logos: ['github', 'keycloak', 'linux', 'python']
    }
]

function Skill({title, description, logos}){
    return (
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>My favorites:</p>
          {logos.map((logo, idx) => (
            <img className={styles.skillIconImage} src={useBaseUrl(`img/skills/${logo}.svg`)} alt={idx}/>
          ))}
          <hr className={styles.line}/>
        </div>
    );
}

function Skills() {
    return(
        <section className={styles.skills}>
            <div className="container">
                <div className="row">
                    <h1>Skills</h1>
                </div>
                <div className="row">
                    <div className="col col--6">
                        {skills.map((props, idx) => (
                            <Skill key={idx} {...props} />
                        ))}
                    </div>
                    <div className={clsx('col col--6', styles.imageContainer)}>
                        <img className={styles.skillImage} src={useBaseUrl('img/undraw_code.svg')} />
                    </div>
                   
                </div>
            </div>
        </section>
    )
}
export default Skills