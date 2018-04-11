import React from 'react';

class List extends React.Component {
    /*initialize state of component with constructor. also initializes this keyword.*/
    constructor (){
        super();

        this.state = {
          /*loading tells us if we should show loading state or a table with the current information*/
          loading: false,
            currencies: [], //data from api will populate array to hold currencies
            error: null, //update error state if api error is generated
        };
    }

    //make AJAX call to API, wrap currencies and put them inside currencies state
    componentDidMount(){
        this.setState({ loading: true }); //never access this.state directly, use setState

        fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')
            .then(response => {
                return response.json().then(json => {
                    return response.ok ? json : Promise.reject(json);
                });
            })
            .then((data) => {
                this.setState({
                    currencies: data.currencies,
                    loading: false
                });
            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage,
                    loading: false
                });
            });
    }

    render() {
        console.log(this.state); //to view state change

        if(this.state.loading){
            return <div>Loading...</div>
        }

        return (
            <div>text</div>
        );
    }
}

export default List;