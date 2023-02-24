function PersonalView({firstname, lastname, email, phone, summary}){
    return (
        <div>
            <h2>{firstname + ' '} {lastname} </h2>
            <div>{email}</div>
            <div> {phone}</div>
            <div> {summary}</div>
        </div>
    )
}

export default PersonalView