const movieList = [
  {
    id: '1',
    title: 'Spider-Man: Homecoming',
    genre: 'Adventure, Action, Sci-Fi',
    date: 'June 28, 2017',
    directed: 'Jon Watss',
    duration: '2 hours 13 minutes',
    casts: 'Tom Holland, Michael Keaton, Robert Downey Jr., ...',
    synopsis:
      'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.',
    images: '/images/movie/spider-movie.png',
    status: 'show'
  },
  {
    id: '2',
    title: 'Avengers: Endgame',
    genre: 'Action, Adventure, Drama ',
    date: 'April 2029, 2019',
    directed: ' Anthony Russo',
    duration: '3 hours 1 minutes',
    casts: 'Tom Holland, Michael Keaton, Robert Downey Jr., ...',
    synopsis:
      'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.',
    images: '/images/movie/avenger-endgame.jpg',
    status: 'show'
  },
  {
    id: '3',
    title: 'John Wick: Chapter 3',
    genre: 'Action, Crime, Thriller ',
    date: 'May 28, 2021',
    directed: 'Jon Watss',
    duration: '3 hours 13 minutes',
    casts: 'Tom Holland, Michael Keaton, Robert Downey Jr., ...',
    synopsis:
      'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.',
    images: '/images/movie/jonwick-3.jpg',
    status: 'show'
  },
  {
    id: '4',
    title: 'The Lion King',
    genre: 'Adventure, Drama, Cartoon',
    date: 'July 29, 2017',
    directed: 'Jon Watss',
    duration: '2 hours 13 minutes',
    casts: 'Tom Holland, Michael Keaton, Robert Downey Jr., ...',
    synopsis:
      'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.',
    images: '/images/movie/lion-king.jpg',
    status: 'show'
  },
  {
    id: '5',
    title: 'Moana',
    genre: 'Animation, Adventure, Comedy ',
    date: 'June 28, 2017',
    directed: 'Jon Watss',
    duration: '2 hours 13 minutes',
    casts: 'Tom Holland, Michael Keaton, Robert Downey Jr., ...',
    synopsis:
      'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.',
    images: '/images/movie/moana.jpg',
    status: 'show'
  },
  {
    id: '6',
    title: 'Tenet',
    genre: 'Adventure, Action, Sci-Fi',
    date: 'June 28, 2017',
    directed: 'Jon Watss',
    duration: '2 hours 13 minutes',
    casts: 'Tom Holland, Michael Keaton, Robert Downey Jr., ...',
    synopsis:
      'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.',
    images: '/images/movie/Tenet.png',
    status: 'show'
  },
  {
    id: '7',
    title: 'Black Widow',
    genre: 'Adventure, Action, Sci-Fi',
    date: 'May 28, 2017',
    directed: 'Jon Watss',
    duration: '2 hours 13 minutes',
    casts: 'Tom Holland, Michael Keaton, Robert Downey Jr., ...',
    synopsis:
      'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.',
    images: '/images/movie/black-widow.png',
    status: 'upcoming'
  },
  {
    id: '8',
    title: 'Shadow',
    genre: 'Action, Horror, War',
    date: 'Febuary 28, 2017',
    directed: 'Jon Watss',
    duration: '2 hours 13 minutes',
    casts: 'Tom Holland, Michael Keaton, Robert Downey Jr., ...',
    synopsis:
      'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.',
    images: '/images/movie/shadow.jpg',
    status: 'upcoming'
  },
  {
    id: '9',
    title: 'The Witches',
    genre: 'Adventure, Action, Sci-Fi',
    date: 'May 28, 2017',
    directed: 'Jon Watss',
    duration: '2 hours 13 minutes',
    casts: 'Tom Holland, Michael Keaton, Robert Downey Jr., ...',
    synopsis:
      'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.',
    images: '/images/movie/The-Witches.png',
    status: 'upcoming'
  },
  {
    id: '10',
    title: "Don't Tell a Soul",
    genre: 'Adventure, Action, Sci-Fi',
    date: 'March 28, 2017',
    directed: 'Jon Watss',
    duration: '2 hours 13 minutes',
    casts: 'Tom Holland, Michael Keaton, Robert Downey Jr., ...',
    synopsis:
      'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.',
    images: '/images/movie/donttell.jpg',
    status: 'upcoming'
  },
  {
    id: '11',
    title: 'The Little Things',
    genre: 'Adventure, Action, Sci-Fi',
    date: 'June 28, 2017',
    directed: 'Jon Watss',
    duration: '2 hours 13 minutes',
    casts: 'Tom Holland, Michael Keaton, Robert Downey Jr., ...',
    synopsis:
      'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.',
    images: '/images/movie/little.jpg',
    status: 'upcoming'
  },
  {
    id: '12',
    title: 'Minamata',
    genre: 'Adventure, Action, Sci-Fi',
    date: 'August 28, 2017',
    directed: 'Jon Watss',
    duration: '2 hours 13 minutes',
    casts: 'Tom Holland, Michael Keaton, Robert Downey Jr., ...',
    synopsis:
      'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.',
    images: '/images/movie/minata.jpg',
    status: 'upcoming'
  }
]

export default movieList
