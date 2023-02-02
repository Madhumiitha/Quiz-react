export default function Quiz(props){
    let chosenOption=-1
function handleChange(e){
        console.log(e.target.value);
        chosenOption=e.target.value;
    }
    function onNext(){
        //guard clause
        if(chosenOption===-1) alert("choose valid option");
        if(chosenOption===props.q.ans)
            console.log("Correct");
        props.changeQuiz()
    }
    return(
        <div className="wrapper">
            <div className="question">{props.q.question}</div>
            <div className="options">
                <div className="option">
                    <input onChange={handleChange} name="option" id='0' value='0' type="radio"></input>
                <label htmlFor="0">{props.q.options[0]}</label>
            </div>

            <div className="option">
                    <input onChange={handleChange} name="option" id='1' value='1' type="radio"></input>
                <label htmlFor="1">{props.q.options[1]}</label>
            </div>

            <div className="option">
                    <input onChange={handleChange} name="option" id='2' value='2' type="radio"></input>
                <label htmlFor="2">{props.q.options[2]}</label>
            </div>

            <div className="option">
                    <input onChange={handleChange} name="option" id='3' value='3' type="radio"></input>
                <label htmlFor="3">{props.q.options[3]}</label>
            </div>
            <div className="button">
                <button onClick={onNext}>Next</button>
                
            </div>

        </div>
        </div>
            
    );
}