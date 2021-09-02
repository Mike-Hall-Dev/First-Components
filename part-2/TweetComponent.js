const TweetComponent = (props) => (
    <div>
        <span>{props.username}</span>
        <br></br>
        <span>{props.date}</span>
        <br></br>
        <sm>{props.name}</sm>
        <h3>{props.message}</h3>
    </div>
)
