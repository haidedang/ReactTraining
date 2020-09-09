//introducing JSX 

var Wrapper = function (props) {
    return (
    <div>{props.children} 
    </div>)
}


React.createElement(Wrapper, null , 
    React.createElement(h1, {className: 'heading'}, 'Cool Stuff')
)

ReactDOM.render(
    <Wrapper> 
        <h1> cool Stuff </h1>
    </Wrapper>, 
    document.getElementById('container')
)

