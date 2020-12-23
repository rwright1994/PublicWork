import styles from './BannerAction.module.css';
import ActionTab from './ActionTab';

const BannerAction = () => {
    return (
        <div className={styles.actionContainer}>
            <ActionTab 
            link="/templates"
            heading="Templates" 
            description="Having trouble coming up with your own design? Maybe looking at a couple of tempaltes will help."/>
            <ActionTab 
            link="/demo"
            heading="Shopping Demo"
            btnText="Demo"
            description="A shopping demo complete with cart and items."/>
        </div>
    )
}

export default BannerAction;