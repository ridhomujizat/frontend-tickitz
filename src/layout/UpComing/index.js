import React, { Component } from 'react'
import './index.scss'
import { Container } from 'react-bootstrap'
import Button from '../../components/Button'
import CardUpComing from '../../components/CardUpComig'
import { connect } from 'react-redux'
import { getMovie } from '../../redux/actions/movie'
import { MonthUpComing, month } from '../../helper/date'
const { REACT_APP_API_URL: API_URL } = process.env

class UpcomingMovie extends Component {
 state ={
   movie: [],
   month: MonthUpComing(7),
   upcomingBtnClicked: null
 }
 componentDidMount () {
   this.fetchData()
 }

 async fetchData () {
   await this.props.getMovie({ status: 'upcoming' })

   const { results } = this.props.movie.movieUpcoming
   await this.setState({ movie: results })
 }

 async monthUpcoming (value) {
   if (this.state.upcomingBtnClicked !== value) {
     this.setState({ upcomingBtnClicked: value })
     const monthNumber = month.indexOf(value) + 1
     await this.props.getMovie({ status: 'upcoming', month: monthNumber })
     const { results } = this.props.movie.movieUpcoming
     await this.setState({ movie: results })
   } else {
     this.fetchData()
   }
 }
 render () {
   const { movie, month, upcomingBtnClicked } = this.state
   return (
     <>
       <div id='upcoming'>
         <Container>
           <div className='d-flex container justify-content-between upcoming-text mt-4'>
             <h4>Upcoming Movies</h4>
             <h5 onClick={this.fullMovie}>view all</h5>
           </div>
           <div className='slider upcoming-button'>
             {month.map((item, index) => {
               return (
                 <div
                   className='slide upcoming-button-month'
                   key={String(index)}
                 >
                   <Button
                     variant={upcomingBtnClicked === item ? 'primary' : 'outline-primary'}
                     value={item}
                     block={true}
                     onClick={() => this.monthUpcoming(item)}
                   >
                     {item}
                   </Button>
                 </div>
               )
             })}
           </div>
           <div className='slider mt-3 mb-5'>
             {movie
               .map((item) => {
                 return (
                   <CardUpComing
                     image={`${API_URL}${item.image}`}
                     title={item.title}
                     genre={item.genre}
                     key={String(item.id)}
                     id={item.id}
                     slug={item.slug}
                   />
                 )
               })}
           </div>
         </Container>
       </div>
     </>
   )
 }
}

const mapStateToProps = (state) => ({
  movie: state.movie
})

const mapDispatchToProps = { getMovie }

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMovie)
