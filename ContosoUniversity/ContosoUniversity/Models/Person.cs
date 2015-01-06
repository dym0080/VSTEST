using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversity.Models
{
    public abstract class Person
    {
        public int ID { get; set; }

        [Required,StringLength(50),Display(Name="Last Name")]
        public string LastName { get; set; }

        [Required,Column("FirstName"),Display(Name="First Name")]
        [StringLength(50,ErrorMessage="First Name cannot be longer than 50 characters")]
        public string FirstMidName { get; set; }

        [Display(Name="Full Name")]
        public string FullName
        {
            get
            {
                return LastName + ", " + FirstMidName;
            }
        }
    }
}