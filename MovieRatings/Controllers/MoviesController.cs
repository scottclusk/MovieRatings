using MovieRatings.Core;
using MovieRatings.DAL;
using Newtonsoft.Json;
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
        public HttpResponseMessage GetMovies()
        {
            var movies = _component.GetMovies();
            var result = JsonConvert.SerializeObject(movies, Formatting.None,
                        new JsonSerializerSettings()
                        {
                            ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                        });
            return new HttpResponseMessage() {
                Content= new StringContent(result)
            };
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

        [HttpPost]
        public HttpResponseMessage DeleteMovie(Movie movie)
        {
            var response = new HttpResponseMessage();
            var saved = _component.DeleteMovie(movie.Id);
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

        [HttpPost]
        public HttpResponseMessage AddRating(Rating rating)
        {
            var response = new HttpResponseMessage();
            var saved = _component.AddRating(rating);
            if (saved)
                response.StatusCode = HttpStatusCode.OK;
            else
                response.StatusCode = HttpStatusCode.InternalServerError;
            return response;
        }
    }
}
