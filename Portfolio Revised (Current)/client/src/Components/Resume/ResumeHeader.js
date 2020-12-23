import styles from './ResumeHeader.module.css';

const ResumeHeader = () => {
    return(  
    <>
    <div className={styles.resumeHeader}>
        <h2>Robert Wright</h2>
        <h3>Front-end Developer & Business Man</h3>
    </div>
    <div className={styles.resumeOverview}>
        <p>Outgoing goal oriented junior developer with a hardworking, get it done attitude. Thorough understanding of Object-Oriented Design (OOJ), Data Structures, and coding practices. Adapt and learn new technologies in the constantly evolving environment. Fundamental understanding of the business life cycle and constructing business philosophies to foster an understanding of the companies objective.</p>
    </div>
    </>);
}

export default ResumeHeader;