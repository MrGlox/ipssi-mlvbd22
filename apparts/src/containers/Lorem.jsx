import { Component } from "react";

class Lorem extends Component {
  state = {
    isLoading: true,
    hasError: false,
    data: [],
  };

  async fetchApi() {
    try {
      const response = await fetch(
        "https://baconipsum.com/api/?type=meat-and-filler"
      );
      const data = await response.json();

      this.setState({ isLoading: false, data }); // === {data: data}
    } catch (err) {
      this.setState({ hasError: true });

      throw err;
    }
  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    const { isLoading, hasError, data } = this.state;

    if (hasError) return <p>Error...</p>; // CONDITION DE SORTIE

    return (
      <>
        <h1>Lorem</h1>
        {isLoading ? <p>Loading...</p> : <p>{data}</p>}
      </>
    );
  }
}

export default Lorem;
