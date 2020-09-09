import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Table from './components/Table'
import Form from './components/Form'

class App extends React.Component {
    /* constructor(props){
        super(props)
        this.state = {
            characters : [
                {
                    name:'hai',
                    job: 'it'
                }
            ]
        }

        this.removeData= this.removeData.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
 */
    state = {
        characters : [
            {
                name:'hai',
                job: 'it'
            }
        ]
    }

    removeData= this.removeData.bind(this)
    handleSubmit = this.handleSubmit.bind(this)

    removeData (i) {
        let arr = this.state.characters.filter((data , index) => {
            return index != i;
        })
        
        this.setState({
            characters : arr 
        })
    }

    handleSubmit (data) { 
        this.setState({ characters: [...this.state.characters, data] })
    }

    render() {
        return (
        <div>
          <Table character = {this.state.characters} removeData = {this.removeData} />
          <Form handleSubmit= {this.handleSubmit}/>
        </div>
        )
    }
}

export default App;