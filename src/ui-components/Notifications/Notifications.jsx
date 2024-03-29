import './Notifications.css'

const Notifications = ({icon , text, action}) => {
    return <div className="toast">
        <div>{icon  && icon}
        {text && (<h3>{text}</h3>)}</div>
        {action && action}
    </div>
}

export default Notifications