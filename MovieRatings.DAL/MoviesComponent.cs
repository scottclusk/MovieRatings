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

        public bool DeleteMovie(int id)
        {
            var success = true;
            try
            {
                _db.Casts.Where(x => x.MovieId == id).ToList().ForEach(item => _db.Casts.Remove(item));
                _db.Ratings.Where(x => x.MovieId == id).ToList().ForEach(item => _db.Ratings.Remove(item));
                _db.Movies1.Remove(_db.Movies1.First(x => x.Id == id));
                _db.SaveChanges();
            }
            catch (Exception)
            {
                success = false;
            }
            return success;
        }

        public bool AddRating(Rating rating)
        {
            var success = true;
            try
            {
                _db.Ratings.Add(rating);
                _db.SaveChanges();
            }
            catch
            {
                success = false;
            }
            return success;
        }
    }
}
