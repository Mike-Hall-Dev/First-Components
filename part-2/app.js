const App = () => (
    <div>
        <TweetComponent username="user1" name="Bob" date="8/1/2021" message="My first tweet" />
        <TweetComponent username="user2" name="Ted" date="8/21/2021" message="I like pizza" />
        <TweetComponent username="user3" name="Jon" date="9/1/2021" message="Beer is good." />
    </div>
)


ReactDOM.render(<App />, document.getElementById("root"))
