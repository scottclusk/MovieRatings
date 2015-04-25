using MovieRatings.Core;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRatings.DAL
{
    public class MoviesComponent
    {
        MovieRatingsEntities _db;
        public MoviesComponent()
        {
            _db = new MovieRatingsEntities();
        }

        public List<Movie> GetMovies()
        {
            return _db.Movies1.ToList();
        }

        public bool AddMovie(Movie movie)
        {
            var success = true;
            try
            {
                _db.Movies1.Add(movie);
                _db.SaveChanges();
            }
            catch (Exception)
            {
                success = false;
            }
            return success;   
        }
    }
}
