import React, { Component } from "react";
import "./index.scss";
import { Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Button from "../../components/Button";

class Index extends Component {
  state = {
    time: null,
    slectedID: null,
    ...this.props,
  };

  selectedTime = (event) => {
    const timeSelected = event.target.id.slice(2);
    if (event.target.className == "disabled") {
      return this.setState({ time: null });
    }

    return this.setState({
      time: timeSelected,
      slectedID: event.target.id,
    });
  };

  bookNow = (id) => {
    const { history } = this.props;
    const { time, date, image, price, cinema } = this.state;
    history.push(`/cinema-order/${id}`, {
      timeOrder: time,
      dateOrder: date,
      imageOrder: image,
      priceOrder: price,
      cinemaOrder: cinema,
    });
  };

  render() {
    const { slectedID } = this.state;
    const idTag = this.props.idTag;
    return (
      <div className="movie-schedule-card">
        <div className="d-flex flex-row justify-content-start align-items-center">
          <img src={this.props.image} alt={this.props.cinema} />
          <div>
            <h5>{this.props.cinema}</h5>
            <p>{this.props.address}</p>
          </div>
        </div>
        <Col xs={12} className=" d-flex flex-row flex-wrap time-available">
          {this.props.times.map((item, index) => {
            return (
              <div className="time">
                <div
                  id={`${idTag}${index}${item.time}`}
                  className={
                    slectedID == `${idTag}${index}${item.time}`
                      ? "selected"
                      : item.status
                  }
                  onClick={this.selectedTime}
                  key={String(index)}
                  time={item.time}
                >
                  {item.time}
                </div>
              </div>
            );
          })}
        </Col>
        <Col xs={12} className=" d-flex justify-content-between my-3">
          <p>Price</p>
          <h6>${this.props.price}.00/seat</h6>
        </Col>
        <Col xs={12} className="col-12 d-flex justify-content-between my-3">
          <Button onClick={() => this.bookNow(this.props.id)}>Book Now</Button>
          <Link
            className="btn btn-outline-primary"
            to={`/cinema-order/${this.props.id}`}
            role="button"
          >
            Add to cart
          </Link>
        </Col>
      </div>
    );
  }
}
export default withRouter(Index);
