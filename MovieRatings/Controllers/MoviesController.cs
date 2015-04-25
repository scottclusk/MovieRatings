using MovieRatings.Core;
using MovieRatings.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MovieRatings.Web.Controllers
{
    public class MoviesController : ApiController
    {
        MoviesComponent _component;
        
        public MoviesController()
        {
            _component = new MoviesComponent();
        }

        [HttpGet]
        public List<Movie> GetMovies()
        {
            return _component.GetMovies();
        }

        [HttpPost]
        public HttpResponseMessage AddMovie(Movie movie)
        {
            var response = new HttpResponseMessage();
            var saved = _component.AddMovie(movie);
            if (saved)
            {
                response.StatusCode = HttpStatusCode.OK;
            }
            else
            {
                response.StatusCode = HttpStatusCode.InternalServerError;
            }
            return response;
        }
    }
}
