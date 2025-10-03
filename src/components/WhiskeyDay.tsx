export default function WhiskeyDay() {
    let date = new Date();
    
    return (
        <h2>
            {date.getDay() == 3 ? "It's Whiskey Wednesday!" : "It's not Whiskey Wednesday :("}
        </h2>
    )
}