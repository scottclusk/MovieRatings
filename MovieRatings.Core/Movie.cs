//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MovieRatings.Core
{
    using System;
    using System.Collections.Generic;
    
    public partial class Movie
    {
        public Movie()
        {
            this.Casts = new HashSet<Cast>();
            this.Ratings = new HashSet<Rating>();
        }
    
        public int Id { get; set; }
        public string Title { get; set; }
        public string Year { get; set; }
        public Nullable<decimal> RunningMinutes { get; set; }
    
        public virtual ICollection<Cast> Casts { get; set; }
        public virtual ICollection<Rating> Ratings { get; set; }
    }
}
