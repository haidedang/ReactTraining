// reusable component, which IS a DOM Element. with certain properties already  
var Wrapper = function(props) {
    return React.createElement('div', {className:'wrapper'}, props.children)
    
}

ReactDOM.render(
    React.createElement(Wrapper, {}, 
        React.createElement('h1', null, 'hey'), 
         React.createElement('h1', null, 'numero2')
        ),
        document.getElementById('container')
)