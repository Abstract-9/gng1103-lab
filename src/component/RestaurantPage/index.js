import React from 'react'
import RestaurantService from "../../service/RestaurantService";

class RestaurantPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = RestaurantService.prototype.getAllRestaurants()
    }

    render() {
        return (
            <div>
                <table className="table-striped">

                </table>
            </div>
        )
    }
}

export default RestaurantPage;