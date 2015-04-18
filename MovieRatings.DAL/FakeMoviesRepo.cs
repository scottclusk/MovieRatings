using MovieRatings.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRatings.DAL
{
    public class FakeMoviesRepo
    {
        public List<Movie> GetMovies()
        {
            var movies = new List<Movie>();
            var ragingBull = new Movie();
            ragingBull.Id = 1;
            ragingBull.Year = "1976";
            ragingBull.RunningMinutes = 140;
            ragingBull.Title = "Raging Bull";
            ragingBull.Casts = new List<Cast>();
            ragingBull.Casts.Add(new Cast()
            {
                MovieId = 1,
                ActorName = "Robert Deniro"
            });
            movies.Add(ragingBull);
            return movies;
        }
        public bool AddMovie(Movie movie)
        {
            return true;
        }
    }
}
