const App = () => (
    <div>
        <Person age={18} name="Billy Bob James" hobbies={['fishing', 'cooking', 'motocross']} />
        <Person age={12} name="James" hobbies={['video games', 'baseball', 'tree climbing']} />
        <Person age={35} name="Roger" hobbies={['mountain biking', 'coding', 'video games']} />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))