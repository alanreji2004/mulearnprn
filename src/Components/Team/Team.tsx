import styles from "./Team.module.css";
import line from "./assets/line.png";
import line2 from "./assets/line2.png";
import data from "../../../data.json"

const Team = () => {
    return (
        <div className={styles.teamWrapper} id="team">
            <h1>Our Team</h1>
            <div className={styles.teamBodyWrapper}>
                <div className={styles.teamBgLineWrapper}>
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                    <img src={line} alt="" loading="lazy" />

                </div>
                <div className={styles.teamMembersDetailsWrapper}>
                    <div className={`${styles.team} ${styles.team1}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.staffAdvisor.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.staffAdvisor.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Staff Advisor
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team2}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.campusLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.campusLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Campus Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team3}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.campusCoLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.campusCoLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Campus Co-Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team4}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.webiglead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.webiglead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Web Ig Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team5}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.webigcolead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.webigcolead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Web IG CoLead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team6}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.appdevlead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.appdevlead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Android IG Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team7}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.appdevcolead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.appdevcolead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Android IG Colead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team8}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.designlead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.designlead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Design Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team9}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.designcolead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.designcolead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Design CoLead
                            </div>
                        </div>
                    </div>
                    {/* <div className={`${styles.team} ${styles.team10}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.campusLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.campusLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Campus Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team3}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.campusCoLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.campusCoLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Campus Co-Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team4}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.webiglead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.webiglead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Web Ig Lead
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Team;