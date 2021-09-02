const Person = (props) => {
    let ageResponse;
    let name = props.name;
    if (props.age >= 18) {
        ageResponse = <h3>please go vote!</h3>
    }
    else {
        ageResponse = <h3>you must be 18</h3>
    }

    if (name.length > 8) {
        name = name.slice(0, 8);
    }

    return (
        <div>
            <p>
                Learn some information about this person:
                <br></br>
                <span>Voting Status: {ageResponse}</span>
                <span>Name: {name}</span>
                <br></br>
                <h4>Hobbies</h4>
                <ul>{props.hobbies.map(h =>
                    (
                        <li>
                            <b>{h}</b>
                        </li>
                    )
                )}</ul>
            </p>
        </div>
    )
}